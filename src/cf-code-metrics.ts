var program = require('commander')
import * as eze from './GenerateBulkCommand'

//eee
//var packageJson = require('./package.json');
//packageJson.version

// define program and options
program
  .version('0.0.1')
  .usage('<command> [options]')
  .option('-d, --debug', 'show debug info')
  
   
// command: generate
program
  .command('generate <source> <target>')
  .alias('gen')
  .description('Generates documentation')
  .option('-i --internval <interval>', "The delay bla bla")
  .action((source, target) => {  
    eze.run(source, target)
    console.log('2')
 })


// command: generate bulk
program
  .command('generate-bulk <source> <target>')
  .alias('genb')
  .description('Generates documentation for multiple projects')
  .option('-i --internval <interval>', "The delay bla bla")
  .action((source, target) => {  
    console.log('genb -s ' + source + ' -t ' + target)
 })

// process commands
program.parse(process.argv)

// displays help by default
if (!process.argv.slice(2).length) {
  program.outputHelp()
}