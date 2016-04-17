/*
Look into a directory, analyze source code files and returns a json object with code metrics and relations.
*/
"use strict";
var fs = require('fs')
var path = require('path')
var decomment = require('decomment');
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

var readFileContent = (filePath) => {
  return new Promise((resolve, reject) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })

  })
}

var removeComments = (content) => {
  return new Promise((resolve, reject) => {

    // transform cfml comments into html comments
    var decommentedCode = content
      .replace(new RegExp('<!---', 'g'), '<!--')
      .replace(new RegExp('--->', 'g'), '-->')

    // remove html comments
    decommentedCode = decomment.html(decommentedCode)

    resolve(decommentedCode)
  })
}

var getIncludes = (content) => {
  return new Promise((resolve, reject) => {

    var includes = []

    // find coldfusion cfinclude tags
    var includeTags = content.match(/<cfinclude[\s\S]*?>/gm)

    if (includeTags) {
      includeTags.forEach(function(includeTag) {

        var re = / template="([^"]*)"/
        var matchResult = includeTag.match(re)
        if (matchResult) {
          var includeTemplate = matchResult[1]

          // add each include template name to the currentFile includes list
          includes.push(includeTemplate)
        }
      })
    }

    resolve(includes)
  })
}

var analyzeFile = (filePath, dirName) => {
  return new Promise((resolve, reject) => {

    var currentFile = {
      file: filePath.replace(dirName, ""),
      includes: []
    }

    readFileContent(filePath)
      .then(content => removeComments(content))
      .then(content => getIncludes(content))
      .then(includes => currentFile.includes = includes)
      .then(() => resolve(currentFile))

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
        result.path = path.normalize(dirName)

        // read all files
        readdirPromise(dirName)
        .then((files) => Promise.all(files.map(file => analyzeFile(file, result.path))))
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
