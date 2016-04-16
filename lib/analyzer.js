/*
Look into a directory, analyze source code files and returns a json object with code metrics and relations.
*/
"use strict";
var fs = require('fs')
var path = require('path')
var recursive = require('recursive-readdir')

var analysisResult = {
  path: '',
  files: [],
  metrics: {}
}

/*
  Clone object helper
*/
var clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

var newAnalysisResult = () => {
  return clone(analysisResult)
}

var readdirPromise = (dirName) => {
  return new Promise((resolve, reject) => {
    recursive(dirName, function (err, files) {
      if (err) {
        reject(err)
        return
      }
      resolve(files)
    })
  })
}

var analyzeFile = (filePath) => {
  return new Promise((resolve, reject) => {

    var currentFile = {
      file: filePath,
      includes: []
    }

    resolve(currentFile)
  })
}

// module functions
var analyze = function(dirName) {

  // analyze source code
  return new Promise((resolve, reject) => {

    // validate path
    fs.exists(dirName, (exists) => {
      if (!exists)
        reject('directory [foo] do not exists!')
      else {

        // initialize analysis result
        var result = newAnalysisResult()
        result.path = dirName

        // read all files
        readdirPromise(dirName)
        .then((files) => {
          // analyze file by file
          return Promise.all(files.map(analyzeFile))
        })
        .then((data) => {
          result.files = data
          resolve(result)
        })
      }
    })
  })
}


// exports
module.exports.newAnalysisResult = newAnalysisResult;
module.exports.analyze = analyze;
