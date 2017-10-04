"use strict"
var Promise = require("bluebird")
Promise.onPossiblyUnhandledRejection(error => {
  throw error
})
const fs = Promise.promisifyAll(require('fs'))
//const doc = require('./doc.js')
const extractor = require('./extractor.js')
const readdirAsync = Promise.promisify(require('recursive-readdir-filter'))
const inspect = require('eyes').inspector({maxLength: false})
const path = require('path')
const parser = require('./parser.js')
const mkpath = Promise.promisify(require('mkpath'))
const clone = require('clone')
//const jinq = require('jinq')
//require('linqjs')
//const _ = require('lodash');

exports.run = async function(source, target, flags) {
  
  // validate source directory
  if (!fs.existsSync(source)) {
    console.error('Cannot find source directory: ' + source)
    process.exit(1)
  }

  // validate target directory
  if (!fs.existsSync(target)){

    // try to create the target directory
    fs.mkdirSync(target, '0744')

    //TODO: handle a potential exception on fs.mkdirSync
    //console.error('Cannot find target directory: ' + target)
    //process.exit(1)
  }

  // recursive search to find all the cf-doc.json files, this identifies each project
  let projects = await readdirAsync(source, { filterFile: (stats) => { return stats.name === 'cf-doc.json' } })

  // process each project in parallel
  let index = await Promise.all(projects.map(async (project) => 
      await processProject(source, target, project, flags)))

  // write index.json
  let indexPath = path.join(target, 'projects.json')
  await fs.writeFileAsync(indexPath, JSON.stringify(index, null, 2))
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

  // analize intermediate files to extract components, functions and stored procedures calls by file (-data.json)
  let data = await generateIntermediateFiles(cfdoc)

  // calculate metrics and creates data.json file
  let metrics = await calculateMetrics(cfdoc, data)
  //inspect(cfdoc)

  // generate documentation
  //await generateDocumentation(cfdoc, data)

  // delete intermediate files?
  if (!cfdoc.env.flags.intermediate) {
    //TODO: implement delete
  }

  return { 
    project: cfdoc.env.folderName,
    components: metrics.components.length,
    sps: metrics.sps.length,
    queries: metrics.queries.length,
    includes: metrics.includes.length,
    issues: 73
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
async function generateIntermediateFiles(cfdoc) {

  const targetTemp = path.join(cfdoc.env.target, '/tmp')
  
  // read all component (cfc) files in tmp directory  
  let componentFiles = await readdirAsync(targetTemp, { filterFile: stats => { return stats.name.match(/\.cfc$/) } })

  // parse each component tree
  let components = await Promise.all(componentFiles.map(async (file) => {
        return await generateComponentFile(file, cfdoc)
  }))


  // read all page (cfm) files in tmp directory  
  let pageFiles = await readdirAsync(targetTemp, { filterFile: stats => { return stats.name.match(/\.cfm$/) } })

  // parse each page tree
  let pages = await Promise.all(pageFiles.map(async (file) => {
      return await generatePageFile(file, cfdoc)
  }))

  return {
    "components": components,
    "pages": pages
  }

}


async function generateComponentFile(file, cfdoc) {

  // read the file tree
  const fileContent = await fs.readFileAsync(file, 'utf8')
  const tree = JSON.parse(fileContent)

  let data = null

  try {
    data = extractor.extractDataFromComponentTree(tree)
    if (data) {
      data.file = file
      data.type = 'component'
    }
  } catch (error) {
    inspect(file)
    inspect(error)
  }

  // calculate file path
  let treePath = path.parse(file)
  let dataPath = path.join(treePath.root, treePath.dir, treePath.base + '-data.json')

  // write data into a temporary directory
  await fs.writeFileAsync(dataPath, JSON.stringify(data, null, 2))

  return data
}

async function generatePageFile(file, cfdoc) {

  // read the file tree
  const fileContent = await fs.readFileAsync(file, 'utf8')
  const tree = JSON.parse(fileContent)

  let data = null
  
  try {
    data = extractor.extractDataFromPageTree(tree)  
    if (data) {
      data.file = file
      data.type = 'page'
    }
  } catch (error) {
    inspect(error)
  }

  // calculate file path
  let treePath = path.parse(file)
  let dataPath = path.join(treePath.root, treePath.dir, treePath.base + '-data.json')

  // write data into a temporary directory
  await fs.writeFileAsync(dataPath, JSON.stringify(data, null, 2))
  
  return data
}
/*
async function generateDocumentation(cfdoc, data) {
  
  try {

    await doc.generate(cfdoc, data)

    //await doc.generateSpsPage(data.sps)
    //await doc.generateIncludesPage(data.includes)

  } catch (error) {
    inspect(error)
  }
  
}
*/

async function calculateMetrics(cfdoc, data) {

  // data has everything
  //inspect(data.components.length)


  // add db object to data
  data.sps = []
  data.includes = []
  data.queries = []
  
  // calculate stored procedures and queries usage


  // get a list of sps
  let sps = data.components
    .filter(x => x !== null && x !== undefined )
    .reduce((a, c) => {
      return a.concat(                      // a is the acumulator
        extractor.search(c, 'procedures')   // c is the component
          .map(f => f                       // f is the function that contains the procedures
              .procedures
              .map(p => {                   // p is the procedure
                
                let sp = clone(p)
                sp.key = {                  
                  file: c.file,
                  line: p.line,
                  col: p.col
                }
                sp.component = c.displayname
                sp.function = {
                  name: f.name,
                  line: f.line,
                  col: p.col                  
                }
                return sp
              })
          ))
    }, [])

  // flatten sps array
  sps = [].concat.apply([], sps)

  // group by sps key
  data.sps = sps.reduce((a, c) => {
    let key = JSON.stringify(c.key)
    //let key = c.key.file
    a[key] = a[key] || []
    a[key].push(c)
    return a
  }, {})
  
  data.sps = []
  // query to check how many times an SP is being referenced
  //inspect(Object.values(sps).map(x => x.length))

  // calculate files dependencies (cfinclude)
  data.includes = calculateIncludeDependencies(data)


  // calculate functions usage

  //inspect(data)

  // write data into a temporary directory
  let dataPath = path.join(cfdoc.env.target, 'project-data.json')
  await fs.writeFileAsync(dataPath, JSON.stringify(data, null, 2))

  return data
}

function calculateIncludeDependencies(data) {

  let includesFromComponents = data.components
    .filter(x => x !== null && x !== undefined )
    .reduce((a, c) => {
      return a.concat(                      // a is the acumulator
        
          c.includes
            .map(i => {

              let include = clone(i)
              include.file = c.file
              return include

    }))}, [])

  let includesFromPages = data.pages
    .filter(x => x !== null && x !== undefined )
    .reduce((a, c) => {
      return a.concat(                      // a is the acumulator
        
          c.includes
            .map(i => {

              let include = clone(i)
              include.file = c.file
              return include

    }))}, [])


    

  // group by template name
  let includes = includesFromComponents.concat(includesFromPages)

  includes = includes.reduce((a, c) => {
      let key = c.template
      a[key] = a[key] || []
      a[key].push(c)
      return a
    }, {})
  
  includes = Object.keys(includes).map(key => { return { template: key, includedBy: includes[key] }})

  return includes
}