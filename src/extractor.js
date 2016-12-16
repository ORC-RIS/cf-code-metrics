

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

  page.includes = extractIncludes(tree)

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
    item.args = extractFunctionsArguments(f)

    // sps invocations
    item.procedures = extractStoredProcedures(f)

    result.push(item)
  }  

  return result
}


function extractFunctionsArguments(tree) {
  let result = []

  // get function's arguments
  let args = traversalSearch(tree, 'name', 'cfargument')

  for (let a; a = args.pop();) {

    // argument definition
    let item = a.attribs
    item.line = a.line
    item.col = a.col
    
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
    item.params = extractStoredProceduresParameters(sp)
    
    result.push(item)
  }

  return result
}


function extractStoredProceduresParameters(tree) {
  let result = []

  // get sp parameters
  let params = traversalSearch(tree, 'name', 'cfprocparam')

  for (let p; p = params.pop();) {
    
    // sp param definition
    let item = p.attribs
    item.line = p.line
    item.col = p.col
    
    result.push(item)
  }

  return result
}

//----------------------------------------------------
// page data extraction

function extractIncludes(tree) {
  let result = []

  // searh for any include in tree
  let includes = traversalSearch(tree, 'name', 'cfinclude')

  for (let i; i = includes.pop();) {
    
    // include definition
    let item = i.attribs
    item.line = i.line
    item.col = i.col

    result.push(item)
  }

  return result
}

function extractTag(tree, tag) {
  let result = []

  // searh for any include in tree
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
