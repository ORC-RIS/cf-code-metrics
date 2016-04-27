"use strict"
var fs = require('fs')

var readFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}

var capitalizeKeys = (obj) => {
    var output = {}

    var key, newKey, ix, value;

   for (key in obj) {
       // Get the destination key
       newKey = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()

       // Get the value
       value = obj[key];

       // If this is an object, recurse
       if (typeof value === "object") {
           value = capitalizeKeys(value);
       }

       // Set it on the result using the destination key
       output[newKey] = value;
   }

   return output;

/*
    for (var i in obj) {
        var newKey = i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()
        output[newKey] = capitalizeKeys(obj[i]);

        if (obj[i] instanceof Object) {
            output[newKey] = capitalizeKeys(obj[i]);
        } else {
            output[newKey] = obj[i];
        }

    }
*/
    /*
    for (var attr in obj) {
      var newKey = attr.charAt(0).toUpperCase() + attr.slice(1).toLowerCase()
      if (obj.hasOwnProperty(attr)) output[newKey] = obj[attr]
    }
    */


/*
    if (obj instanceof Object)
    {
        for (var k in obj){
            if (obj.hasOwnProperty(k)){
                //recursive call to scan property
                var newKey = k.charAt(0).toUpperCase() + k.slice(1).toLowerCase()
                output[newKey] = capitalizeKeys(obj[k])
            }
        }
    }*/
    /*
    else {
      //console.log('lalalalalalalalla')
        //not an Object so obj[k] here is a value
        //var newKey = k.charAt(0).toUpperCase() + k.slice(1).toLowerCase()
        output[newKey] = obj[k]
    };
*/

    return output
}

var save = (data, fileName) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(data), function(err) {
      if(err) {
          reject(err)
      }
      resolve(data)
    })
  })
}

// exports
module.exports.readFileContent = readFileContent;
module.exports.capitalizeKeys = capitalizeKeys;
module.exports.save = save;
