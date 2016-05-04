"use strict"
var util = require('./util.js')
var fs = require('fs')
var md = require('markdown-utils')
var StringBuilder = require('stringbuilder')
StringBuilder.extend('string')

// module functions
var getMetadata = (url) => {

  // get components metadata in json format from coldfusion server
  return new Promise((resolve, reject) => {

    //filePath
    util.readFileContent(url)
      .then(content => JSON.parse(content))
      //.then(content => util.save(content, 'eze01.js'))
      .then(content => util.capitalizeKeys(content))
      //.then(content => util.save(content, 'eze02.js'))
      .then(content => {


        //console.log(content)
/*
        content.components.forEach(component => {
        //  console.log(component)
        })
*/

        return content
      })
      .then(content => resolve({ metadata: content }))
      .catch(err => console.log(err))
  })
}

var generateMD = (jsonMetadata) => {

  // analyze json metadata
  return new Promise((resolve, reject) => {

    // iterates components
    jsonMetadata.metadata.Components.forEach((component) => {

      var mdContent = new StringBuilder()

//blockquote

      mdContent.appendLine(md.h1(component.Displayname))

      mdContent.appendLine("")
      mdContent.appendLine(md.h6(component.Hint))


      mdContent.appendLine("")
      mdContent.appendLine(md.h3("Functions"))

      component.Functions.forEach((f) => {
        mdContent.appendLine("")
        mdContent.appendLine(md.h4(f.Name))
      })


      mdContent.appendLine("")
      mdContent.appendLine(JSON.stringify(component))

      //console.log(component)
      // creates 1 file per component


      mdContent.build((err, result) => {
        util.save(result, './docs/md/' + component.Name + '.md')
      })

      //util.save(component, './docs/md/hola.js')

    })

    // validate path
    //resolve(jsonMetadata)
    resolve('ok')
  })
}

// exports
module.exports.generateMD = generateMD;
module.exports.getMetadata = getMetadata;
