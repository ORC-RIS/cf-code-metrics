"use strict"
var Promise = require("bluebird")
Promise.onPossiblyUnhandledRejection(error => {
  throw error
})
const fs = Promise.promisifyAll(require('fs'))
const doc = require('./GenerateCommand.js')
const readdirAsync = Promise.promisify(require('recursive-readdir-filter'))
const inspect = require('eyes').inspector({maxLength: false})
const path = require('path')
const parser = require('./parser.js')
const mkpath = Promise.promisify(require('mkpath'))

exports.run = async function run(source, target, flags) {
  
  // validate source directory
  if (!fs.existsSync(source)) {
    console.error('Cannot find source directory: ' + source)
    process.exit(1)
  }

  // validate target directory
  if (!fs.existsSync(target)){

    //TODO: try to create the target directory

    console.error('Cannot find target directory: ' + target)
    process.exit(1)
  }

  // recursive search to find all the cf-doc.json files, this identifies each project
  let projects = await readdirAsync(source, { filterFile: (stats) => { return stats.name === 'cf-doc.json' } })

  // process each project in parallel
  await Promise.all(projects.map(async (project) => 
      await processProject(source, target, project, flags)))

}


async function processProject(source, target, project, flags) {
  
  // read cfdoc definition
  const configFile = await fs.readFileAsync(project, 'utf8')
  let cfdoc = JSON.parse(configFile)

  // get folder name of current project
  const projectFolder = path.basename(path.dirname(project))
  
  // creates env object into cfdoc with required parameters for documentation generation   
  cfdoc.env = {
    source: path.normalize(path.dirname(project)),
    target: path.join(target, projectFolder),
    folderName: projectFolder,  // folder name used to generate target documentation
    flags: flags
  }

  // generates a json file for each coldfusion file in a tmp directory
  await parseDirectory(cfdoc)

  // analize intermediate files to extract components, functions and stored procedures calls
  await generate(cfdoc)


  // calculate metrics


  // generate documentation


  // delete intermediate file?
  if (!cfdoc.env.flags.intermediate) {
    //TODO: implement delete
  }

}

// this function iterates cfm and cfc files for a given directory,
// parses each file and generates a json intermediate file that 
// represents a syntax tree (AST)
async function parseDirectory(cfdoc) {

  // read only cfm and cfc files
  //TODO: improve regex
  let files = await readdirAsync(cfdoc.env.source, { filterFile: (stats) => { return stats.name.match(/\.cfm$/) || stats.name.match(/\.cfc$/) } })

  // parse each file
  await Promise.all(files.map(async (file) => {
      
      await parseFile(file, cfdoc)

  }))

}
 
// generates a json intermediate file that represents a syntax tree (AST)
async function parseFile(file, cfdoc) {

  // read the file
  const fileContent = await fs.readFileAsync(file, 'utf8')

  // parse the file content
  let tree = parser.parse(fileContent)

  // calculate target path for this file
  const filepath = path.normalize(file)
  const partialPath = filepath.substr(cfdoc.env.source.length, filepath.length)
  const targetPath = path.join(cfdoc.env.target, '/tmp', partialPath)
  const target = path.parse(targetPath)
  
  // create target directory if it does not exists
  await mkpath(target.dir)
  
  // write tree to temporary directory
  await fs.writeFileAsync(targetPath, JSON.stringify(tree, null, 2))

}


// look into tmp directory, analize trees to extract components, functions and stored procedures calls
async function generate(cfdoc) {

  // read all the components in tmp directory
  const targetTemp = path.join(cfdoc.env.target, '/tmp')
  let components = await readdirAsync(targetTemp, { filterFile: (stats) => { return stats.name.match(/\.cfc$/) } })

  // parse each component tree
  await Promise.all(components.map(async (file) => {
      await generateComponentFile(file, cfdoc)
  }))

}


async function generateComponentFile(file, cfdoc) {

  // read the file tree
  const fileContent = await fs.readFileAsync(file, 'utf8')
  const tree = JSON.parse(fileContent)

  let data = extractDataFromComponentTree(tree[0])

  // calculate file path
  let treePath = path.parse(file)
  let dataPath = path.join(treePath.root, treePath.dir, treePath.name + '-data.json')

  // write data into a temporary directory
  await fs.writeFileAsync(dataPath, JSON.stringify(data, null, 2))


  /*
  Each file is a component  
  {
    type: [page|component],


  }
  */
  
}

//------------------------------------------------------------------------
// move into a new module

function traversalSearch(obj, key, value) {
  var result = []
  
  // iterate arrays
  if(obj instanceof Array) {
      for(var i = 0; i < obj.length; i++) {
          result = result.concat(traversalSearch(obj[i], key, value))
      }
  }
  else
  {
      // iterate object properties
      for(var prop in obj) {

          if(prop == key) {
          
              if(obj[prop] == value) {
                // found!
                result.push(obj)
                break
              }
          }
          
          // continue with nested object./array iteration
          if(obj[prop] instanceof Object || obj[prop] instanceof Array) {
              result = result.concat(traversalSearch(obj[prop], key, value))
          }
      }
  }
  
  return result
}


function extractDataFromComponentTree(tree) {

  // component definition
  let component = tree.attribs
  component.line = tree.line
  component.col = tree.col

  // get functions
  component.functions = extractFunctions(tree)

  return component
}


function extractFunctions(tree) {
  let result = []

  // searh for any functions in tree
  let functions = traversalSearch(tree, 'name', 'cffunction')

  for (let f; f = functions.pop();) {
    
    // function definition
    let item = f.attribs
    item.line = f.line
    item.col = f.col
    
    // function arguments
    item.args = extractFunctionsArguments(f)

    // sps invocations
    item.procedures = extractStoredProcedures(f)

    result.push(item)
  }  

  return result
}


function extractFunctionsArguments(tree) {
  let result = []

  // get function's arguments
  let args = traversalSearch(tree, 'name', 'cfargument')

  for (let a; a = args.pop();) {

    // argument definition
    let item = a.attribs
    item.line = a.line
    item.col = a.col
    
    result.push(item)
  }

  return result
}


function extractStoredProcedures(tree) {
  let result = []

  // get sp's
  let sps = traversalSearch(tree, 'name', 'cfstoredproc')

  for (let sp; sp = sps.pop();) {
    
    // stored procedure invocation definition
    let item = sp.attribs
    item.line = sp.line
    item.col = sp.col

    // sp parameters
    item.params = extractStoredProceduresParameters(sp)
    
    result.push(item)
  }

  return result
}


function extractStoredProceduresParameters(tree) {
  let result = []

  // get sp parameters
  let params = traversalSearch(tree, 'name', 'cfprocparam')

  for (let p; p = params.pop();) {
    
    // sp param definition
    let item = p.attribs
    item.line = p.line
    item.col = p.col
    
    result.push(item)
  }

  return result
}
//------------------------------------------------------------------------
