"use strict"
const inspect = require('eyes').inspector({maxLength: false})

function traversalSearch(obj, key, value) {
  var result = []
  
  // iterate arrays
  if(obj instanceof Array) {
      for(var i = 0; i < obj.length; i++) {
          result = result.concat(traversalSearch(obj[i], key, value))
      }
  }
  else
  {
      // iterate object properties
      for(var prop in obj) {

          if(prop == key) {          
              if(obj[prop] == value) {
                // found!
                result.push(obj)
                break
              }
          }
          
          // continue with nested object./array iteration
          if(obj[prop] instanceof Object || obj[prop] instanceof Array) {
              result = result.concat(traversalSearch(obj[prop], key, value))
          }
      }
  }
  
  return result
}

exports.extractDataFromPageTree = function (tree) {

  let page = {}

  page.includes = extractTag(tree, 'cfinclude')
  page.functions = extractFunctions(tree)
  page.procedures = extractStoredProcedures(tree)
  page.queries = extractQueries(tree)

  return page
}


// component data extraction

exports.extractDataFromComponentTree = function(tree) {

  // component definition
  let component = tree.attribs
  component.line = tree.line
  component.col = tree.col

  // get functions
  component.functions = extractFunctions(tree)

  return component
}


// private functions

function extractQueries(tree) {
  let result = []
  
  let queries = traversalSearch(tree, 'name', 'cfquery')
  
  for (let q; q = queries.pop();) {
    let item = q.attribs
    item.text = extractText(q)    
      
    result.push(item)
  }

  return result
  
  //inspect(traversalSearch(tree, 'name', 'cfquery'))

  //return extractTag(tree, 'cfquery')
}

function extractFunctions(tree) {
  let result = []

  // searh for any functions in tree
  let functions = traversalSearch(tree, 'name', 'cffunction')

  for (let f; f = functions.pop();) {
    
    // function definition
    let item = f.attribs
    item.line = f.line
    item.col = f.col
    
    // function arguments
    item.args = extractTag(f, 'cfargument')

    // sps invocations
    item.procedures = extractStoredProcedures(f)

    result.push(item)
  }  

  return result
}


function extractStoredProcedures(tree) {
  let result = []

  // get sp's
  let sps = traversalSearch(tree, 'name', 'cfstoredproc')

  for (let sp; sp = sps.pop();) {
    
    // stored procedure invocation definition
    let item = sp.attribs
    item.line = sp.line
    item.col = sp.col

    // sp parameters
    item.params = extractTag(sp, 'cfprocparam')
    
    result.push(item)
  }

  return result
}

//----------------------------------------------------
// page data extraction

function extractTag(tree, tag) {
  let result = []

  let tagList = traversalSearch(tree, 'name', tag)

  for (let x; x = tagList.pop();) {
    
    // include definition
    let item = x.attribs
    item.line = x.line
    item.col = x.col

    result.push(item)
  }

  return result
}

function extractText(tag) {

  return traversalSearch(tag, 'type', 'text')
    .map(x => x.data)
    .reduce((a, b) => { 
      return a + b
    })
    
}
