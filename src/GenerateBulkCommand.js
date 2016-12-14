"use strict"
var Promise = require("bluebird")
Promise.onPossiblyUnhandledRejection(error => {
  throw error
})
const fs = Promise.promisifyAll(require('fs'))
const doc = require('./GenerateCommand.js')
const readdirAsync = Promise.promisify(require('recursive-readdir-filter'))
const inspect = require('eyes').inspector({maxLength: false})


exports.run = async function run(source, target) {
  
  // validate source directory
  if (!fs.existsSync(source)) {
    console.error('Cannot find source directory: ' + source)
    process.exit(1)
  }

  // validate target directory
  if (!fs.existsSync(target)){
    console.error('Cannot find target directory: ' + target)
    process.exit(1)
  }

  // recursive search to find all the cf-doc.json files 
  let projects = await readdirAsync(source, { filterFile: (stats) => { return stats.name === 'cf-doc.json' } })

  // process each project in parallel
  await Promise.all(projects.map(async (project) => await processProject(project)))
}

async function processProject(project) {
  
  // read project config file
  const content = await fs.readFileAsync(project, 'utf8')
  console.log(content)

  // get project path
  const path = 

  // parse files

  // generate json intermediate file

  // calculate metrics

  // generate documentation

}