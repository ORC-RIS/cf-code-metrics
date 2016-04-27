"use strict"
var util = require('./util.js')

// module functions
var getMetadata = (url) => {

  // get components metadata in json format from coldfusion server
  return new Promise((resolve, reject) => {

    //filePath
    util.readFileContent(url)
      .then(content => JSON.parse(content))
      .then(content => util.save(content, 'eze01.js'))
      .then(content => util.capitalizeKeys(content))
      .then(content => util.save(content, 'eze02.js'))
      .then(content => {


        console.log(content)
/*
        content.components.forEach(component => {
        //  console.log(component)
        })
*/
      })
      .then(content => resolve({ metadata: content }))
      .catch(err => console.log(err))
  })
}

var generateMD = (jsonMetadata) => {

  // analyze json metadata
  return new Promise((resolve, reject) => {

    // iterates metadata

    // creates 1 file per component

    // validate path
    resolve(jsonMetadata)
  })
}

// exports
module.exports.generateMD = generateMD;
module.exports.getMetadata = getMetadata;
