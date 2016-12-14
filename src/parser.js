"use strict"
var CfmlHandler = require("../lib/cfml-parser/cfml-handler.js")
var CfmlParser = require("../lib/cfml-parser/cfml-parser.js")
const inspect = require('eyes').inspector({maxLength: false})


exports.parse = (content) => {

    var handler = new CfmlHandler()
    var parser = new CfmlParser(handler)

    // parse the whole file
    parser.writeLine(content)

    return handler.dom
}
