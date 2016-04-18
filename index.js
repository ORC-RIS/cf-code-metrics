/*
  Given a directory inspects all the .cfm and .cfc files and return a json object
  with a list of files and dependencies.
*/
"use strict";
var fs = require('fs')
var analyzer = require("./lib/analyzer.js")
var cytoscape = require("./lib/cytoscape-format.js")
var vis = require("./lib/visjs-format.js")

var save = (data, fileName) => {
  return new Promise((resolve, reject) => {

    var jsonData = "includes = " + JSON.stringify(data)

    fs.writeFile(fileName, jsonData, function(err) {
      if(err) {
          reject(err)
      }
      resolve()
    })
  })
}

//TODO: validate app parameters
var directoryToAnalyze = process.argv[2]
console.log(directoryToAnalyze)

analyzer
  .analyze(directoryToAnalyze)
    .then(result => vis.format(result))
    //.then(result => console.log(JSON.stringify(result)))
    .then(visData => save(visData, 'dataset.js'))
    //.then(() => console.log('exit'))
