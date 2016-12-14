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

  // parse files: generates a json file for each coldfusion file
  await parseDirectory(cfdoc)

  // generate json intermediate file


  // calculate metrics


  // generate documentation


  // delete intermediate file?
  if (!cfdoc.env.flags.intermediate) {
    //TODO: implement delete
  }

}


async function parseDirectory(cfdoc) {

  // read only cfm and cfc files
  //TODO: improve regex
  let files = await readdirAsync(cfdoc.env.source, { filterFile: (stats) => { return stats.name.match(/\.cfm$/) || stats.name.match(/\.cfc$/) } })

  // parse each file
  await Promise.all(files.map(async (file) => 
    await parseFile(file)))

}
 

async function parseFile(file, cfdoc) {

  const content = await fs.readFileAsync(file, 'utf8')
  
  let r = parser.parse(content)
  inspect(r)

  //var sps = searchStoredProcedures(cfmlTree)
  //resolve({file: file, sps: sps})
  

}