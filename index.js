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
    .action((source, target, optional) => {
        //genCommand.run(source, target, ...)
    })

// command: generate bulk
program
    .command('generate-bulk <source> <target>')
    .alias('gen-bulk')
    .description('Generates documentation for multiple projects')
    .option('-i --intermedia', "Keep json intermediate file in the target directory")
    .action((source, target, optional) => {    
        
        const flags = {
            intermediate: optional.intermediate
        }

        genbulkCommand.run(source, target, flags)
    })

// process commands
program.parse(process.argv)

// displays help menu when there are no arguments
if (!process.argv.slice(2).length) {
    program.outputHelp()
}
