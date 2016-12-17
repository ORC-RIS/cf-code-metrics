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


exports.generate = async function(dataPath, cfdoc) {
  
  inspect(cfdoc)

  let dataFiles = await readdirAsync(dataPath, { filterFile: (stats) => { return stats.name.match(/\-data.json$/) } })
  
  // read and compile template
  const templateSource = await fs.readFileAsync("./templates/like-elixir-doc/component.html", 'utf8')
  const template = handlebars.compile(templateSource)


  // process each project in parallel
  await Promise.all(dataFiles.map(async (dataFile) => 
    await generateFile(dataFile, template, cfdoc)))
  
}

async function generateFile(file, template, cfdoc) {

  // read the file tree
  const fileContent = await fs.readFileAsync(file, 'utf8')
  const html = template(fileContent)

  // target path
  let filePath = path.parse(file)
  let targetPath = path.join(cfdoc.env.target, filePath.name + '.html')

  // write data into a temporary directory
  await fs.writeFileAsync(targetPath, html)
  
}
