"use strict"
var util = require('./util.js')
var fs = require('fs')
var handlebars = require('handlebars')

// promise config
var Promise = require("bluebird")
Promise.onPossiblyUnhandledRejection(error => {
  throw error
})

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
      //.then(content => {


        //console.log(content)
/*
        content.components.forEach(component => {
        //  console.log(component)
        })
*/

        //return content
      //})
      .then(content => resolve({ metadata: content }))
      .catch(err => console.log(err))
  })
}

var generateHTMLPage = (component, templateFunc) => {
  return new Promise((resolve, reject) => {
console.log(component)
    // generate html
    var html = templateFunc(component)

    // save to file
    util.save(html, './docs/html/' + component.name + '.html')
      .then(() => resolve())

  })
}

var generateHTML = (jsonMetadata) => {

  // analyze json metadata
  return new Promise((resolve, reject) => {

    ///Users/eze1981/Code/cf-code-metrics/
    //templates/like-elixir-doc/component.html

    // read source component template definition
    util.readFileContent("./templates/like-elixir-doc/component.html")
      .then(source => handlebars.compile(source))
      .then(template => Promise.all(jsonMetadata.metadata.components.map(component => generateHTMLPage(component, template))))
      .then(() => resolve('ok2'))

  })
}

// exports
module.exports.getMetadata = getMetadata;
module.exports.generateHTML = generateHTML;
module.exports.generateHTMLPage = generateHTMLPage;
