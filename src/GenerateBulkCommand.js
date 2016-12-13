"use strict"
var Promise = require("bluebird")
Promise.onPossiblyUnhandledRejection(error => {
  throw error
})
const fs = Promise.promisifyAll(require('fs'))
const doc = require('./GenerateCommand.js')

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

  var test = await fs.readdirAsync(source)
  console.log('-----' + test)

}