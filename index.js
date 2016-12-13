"use strict"
var program = require('commander')
var genCommand = require("./src/GenerateCommand")
var genbulkCommand = require("./src/GenerateBulkCommand")

var packageJson = require('./package.json')

// define program and options
program
    .version(packageJson.version)
    .usage('<command> [options]')
    .option('-d, --debug', 'show debug info')

// command: generate
program
    .command('generate <source> <target>')
    .alias('gen')
    .description('Generates documentation')
    .option('-i --internval <interval>', "The delay bla bla")
    .action(function (source, target) {
        bulkCommand.run(source, target)
    })

// command: generate bulk
program
    .command('generate-bulk <source> <target>')
    .alias('genb')
    .description('Generates documentation for multiple projects')
    .option('-i --internval <interval>', "The delay bla bla")
    .action(function (source, target) {    
        bulkCommand.run(source, target)
    })

// process commands
program.parse(process.argv)

// displays help menu when there is no arguments
if (!process.argv.slice(2).length) {
    program.outputHelp()
}
