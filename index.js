/*
  Given a directory inspects all the .cfm and .cfc files and return a json object
  with a list of files and dependencies.
*/
"use strict";

var analyzer = require("./lib/analyzer.js")
var cytoscape = require("./lib/cytoscape-format.js")

analyzer
  .analyze('./test/analyzer/data/subdirectories')
  .then((result) => console.log(result))
  .then(() => console.log('exit'))
  //.then(cytoscape.format)
  //.then(function(data){
  //  console.log(data)
  //})
