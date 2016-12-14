"use strict"
var program = require('commander')
var genCommand = require("./src/GenerateCommand")
var genbulkCommand = require("./src/GenerateBulkCommand")
var inspect = require('eyes').inspector({maxLength: false})
//inspect(genbulkCommand)
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
        //await genCommand.run(source, target)
    })

// command: generate bulk
program
    .command('generate-bulk <source> <target>')
    .alias('gen-bulk')
    .description('Generates documentation for multiple projects')
    .option('-i --internval <interval>', "The delay bla bla")
    .action(function (source, target) {    
        genbulkCommand.run(source, target)
    })

// process commands
program.parse(process.argv)

// displays help menu when there are no arguments
if (!process.argv.slice(2).length) {
    program.outputHelp()
}
