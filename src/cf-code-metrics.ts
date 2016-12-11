var program = require('commander')
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
    console.log('gen -s ' + source + ' -t ' + target)
 })


// command: generate bulk
program
  .command('generate-bulk <source> <target>')
  .alias('genb')
  .description('Generates documentation for a list of projects')
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