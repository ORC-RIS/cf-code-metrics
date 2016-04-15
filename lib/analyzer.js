/*
Look into a directory, analyze source code files and returns a json object with code metrics and relations.
*/
"use strict";
var fs = require('fs');

var emptyAnalysisObject = {
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

var newAnalysisObject = () => {
  return clone(emptyAnalysisObject)
}

// module functions
var analyze = function(path) {

  // analyze source code
  return new Promise(function(resolve, reject) {

    // validate path
    fs.exists(path, (exists) => {
      if (!exists)
        reject('path do not exists!')
      else {

        var analysis = newAnalysisObject()
        analysis.path = path

        resolve(analysis)
      }
    })

/*
    .then(function(exists) {

      if (exists) {
        // do something
        console.log('exists')
      }
      else
        console.log('not exists')

      resolve({})*/
    //})

  });
}

// exports
module.exports.newAnalysisObject = newAnalysisObject;
module.exports.analyze = analyze;
