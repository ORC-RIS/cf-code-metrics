"use strict"
var fs = require('fs')
var doc = require('./GenerateCommand.js')

async function run (source, target) {
  //console.log('gen -s ' + source + ' -t ' + target)
  
  // validate source directory
  if (!fs.existsSync(source)) {
    console.error('Can not find source: directory: ' + source)
    process.exit(1)
  }

  // validate target directory
  if (!fs.existsSync(target)){
    console.error('Can not find target directory: ' + target)
    process.exit(1)
  }

  // iterate each directory in source
  


  //return 'ok' 
 // return new Promise(); 
}