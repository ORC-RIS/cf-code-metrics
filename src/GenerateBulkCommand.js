"use strict"
var fs = require('fs')
var doc = require('./GenerateCommand.js')

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

  // iterate each directory in source
  
  
}