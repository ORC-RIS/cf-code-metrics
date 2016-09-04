"use strict"

var inspect = require('eyes').inspector({maxLength: false})
var assert = require('chai').assert
var should = require('chai').should()

var CfmlHandler = require("./../lib/cfml-parser/cfml-handler.js")
var CfmlParser = require("./../lib/cfml-parser/cfml-parser.js")
var Parser = require("htmlparser2").Parser

describe('CfmlParser', () => {
  describe('#parse', () => {

    it('should parse an empty cfml document ', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('')
      parser.done()

      handler.dom.should.be.deep.equal([])
    })

    it('should parse a one tag document ', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar" />')
      parser.done()

      handler.dom.should.be.deep.equal([
        {
          type: 'tag',
          name:'cfset',
          line: 1,
          col: 0,
          children: []
        }])
    })

    it('should ignore html tags', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<ul><li>item1</li><li>item 2</li></ul>')
      parser.done()

      handler.dom.should.be.deep.equal([])
    })

    it('should parse two tags on the same line', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar" />  <cfset var foo="bar" />')
      parser.done()

      handler.dom.should.be.deep.equal([
        {
          type: 'tag',
          name:'cfset',
          line: 1,
          col: 0,
          children: []
        },
        {
          type: 'tag',
          name:'cfset',
          line: 1,
          col: 25,
          children: []
        }])
    })

    it('should parse two tags on different lines', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar" />')
      parser.writeLine('<cfset var foo="bar" />')
      parser.done()

      handler.dom.should.be.deep.equal([
        {
          type: 'tag',
          name:'cfset',
          line: 1,
          col: 0,
          children: []
        },
        {
          type: 'tag',
          name:'cfset',
          line: 2,
          col: 0,
          children: []
        }])
    })


  })
})
