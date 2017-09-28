"use strict"

var Promise = require("bluebird")
Promise.onPossiblyUnhandledRejection(error => {
  throw error
})

const fs = Promise.promisifyAll(require('fs'))
const readdirAsync = Promise.promisify(require('recursive-readdir-filter'))
const inspect = require('eyes').inspector({maxLength: false})
const handlebars = require('handlebars')
const path = require('path')
const mkpath = Promise.promisify(require('mkpath'))


exports.generate = async function(cfdoc, data) {

  // patch for tmp files
  const dataPath = path.join(cfdoc.env.target, '/tmp')
  
  // read and compile templates

  //TODO: move template name to config
  // select template
  let templateName = 'boostrap'

  // component template
  const componentTemplateSource = await fs.readFileAsync("./templates/" + templateName + "/component.html", 'utf8')
  const generateComponent = handlebars.compile(componentTemplateSource)

  // includes template
  const includesTemplateSource = await fs.readFileAsync("./templates/" + templateName + "/includes.html", 'utf8')
  const generateIncludesPageFunc = handlebars.compile(includesTemplateSource)

  // page template
  // ...

  // dasboard template
  // ...


  // genarates includes page
  await generateIncludesPage(data.includes, generateIncludesPageFunc, cfdoc)

  // read components "xxxx-data.json" files
  let dataFiles = await readdirAsync(dataPath, { filterFile: (stats) => { return stats.name.match(/\.cfc-data.json$/) } })

  // process each project in parallel
  await Promise.all(dataFiles.map(async (dataFile) => 
    await generateFile(dataFile, generateComponent, cfdoc)))


  // copy static assests to target directory

  
}

// only for components?
async function generateFile(file, generateComponent, cfdoc) {

  //inspect(path.normalize(file))
  //cfdoc.env.target
  //test-data\\target\\paris

  try {

    const fileContent = await fs.readFileAsync(file, 'utf8')
    const data = JSON.parse(fileContent)

    const html = generateComponent(data)
    //const html = ""
    // calculate file path
    
    let eze = path.join(cfdoc.env.target, file.substr(cfdoc.env.target.length, file.length).replace("\\tmp", ""))
    let treePath = path.parse(eze)
    
    /*
    // calculate target path for this file
    const filepath = path.normalize(file)
    const partialPath = filepath.substr(cfdoc.env.source.length, filepath.length)
    const targetPath = path.join(cfdoc.env.target, '/tmp', partialPath)
    const target = path.parse(targetPath)
    */

    let docPath = path.join(treePath.root, treePath.dir, treePath.name + '.html') //TODO: remove -data at the end of the filename
    let target = path.parse(docPath)


    await mkpath(target.dir)
    await fs.writeFileAsync(docPath, html)

  } catch (error) {
    inspect('Error processing: ' + file)
  }

}

// async function generateComponents(file, generateComponent, cfdoc) {
// generate components index
// generate components details

// async function generateDatasources(file, generateComponent, cfdoc) {

// async function generateDependencies(file, generateComponent, cfdoc) {
// generate matrix
// generate chart

// async function generateQueries(file, generateComponent, cfdoc) {
// 

async function generateIncludesPage(data, generatePageFunc, cfdoc) {

  try {
    const html = generatePageFunc(data)

    let pagePath = path.join(cfdoc.env.target, 'includes.html')
    let target = path.parse(pagePath)
    
    await mkpath(target.dir)
    await fs.writeFileAsync(pagePath, html)
    
  } catch (error) {
    inspect('Error processing: ' + file)
  }

}

//exports.generateSpsPage = async function (sps) {
//}



