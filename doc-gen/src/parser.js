"use strict"
var CfmlHandler = require("./cfml-parser/cfml-handler.js")
var CfmlParser = require("./cfml-parser/cfml-parser.js")
const inspect = require('eyes').inspector({maxLength: false})


exports.parse = (content) => {

    var handler = new CfmlHandler()
    var parser = new CfmlParser(handler)

    // parse the whole file
    parser.writeLine(content)

    return handler.dom
}
