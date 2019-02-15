"use strict"

var inspect = require('eyes').inspector({maxLength: false})
var chai = require('chai')
var assert = chai.assert
var should = chai.should()
chai.use(require('chai-shallow-deep-equal'))
chai.use(require('chai-subset'))

var CfmlHandler = require("./../src/cfml-parser/cfml-handler.js")
var CfmlParser = require("./../src/cfml-parser/cfml-parser.js")
var Parser = require("htmlparser2").Parser

describe('CfmlParser', () => {
  describe('#parse', () => {

    it('should parse an empty cfml document ', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('')
      parser.done()

      handler.dom.should.be.empty
    })

    // it('should ignore white spaces', () => {
    //   var handler = new CfmlHandler()
    //   var parser = new CfmlParser(handler)
    //   parser.writeLine(' ')
    //   parser.done()
    //   handler.dom.should.be.empty
    // })

    it('should parse a one tag document ', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar" />')
      parser.done()
      
      handler.dom.should.be.shallowDeepEqual([
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
      parser.writeLine('<ul><li></li></ul>')
      parser.done()
      
      handler.dom.should.be.empty
    })

    it('should parse text', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('foo')
      parser.done()
      
      handler.dom.should.be.shallowDeepEqual([
        {
          type: 'text',
          data:'foo'
        }])
    })

    it('should parse two tags on the same line', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar1" /><cfset var foo="bar2" />')
      parser.done()

      handler.dom.should.be.shallowDeepEqual([
        {
          type: 'tag',
          name:'cfset',
          attribs: { var: '', foo: 'bar1' },
          line: 1,
          children: []
        },
        {
          type: 'tag',
          name:'cfset',
          attribs: { var: '', foo: 'bar2' },
          line: 1,
          children: []
        }])
    })

    it('should parse two tags on different lines', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar1" />')
      parser.writeLine('<cfset var foo="bar2" />')
      parser.done()

      handler.dom.should.be.deep.shallowDeepEqual([
        {
          type: 'tag',
          name:'cfset',
          line: 1,
          col: 0,
          children: [],
          attribs: { var: '', foo: 'bar1' }
        },
        {
          type: 'tag',
          name:'cfset',
          line: 2,
          col: 0,
          children: [],
          attribs: { var: '', foo: 'bar2' }
        }])
    })

    it('should parse one call to writeLine with an EOL as two lines', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)
      parser.writeLine('<cfset var foo="bar1" />\n<cfset var foo="bar2" />')
      parser.done()

      handler.dom.should.be.deep.shallowDeepEqual([
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

    it('should parse nested tags', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)

      var cfml =
        `<cfcomponent name="foo">
           <cffunction name="bar">
           </cffunction>
         </cfcomponent>`

      parser.writeLine(cfml)
      parser.done()

      handler.dom[0].should.containSubset(        
          {
            type: 'tag',
            name:'cfcomponent',
            line: 1,
            col: 0,
            children: [
              {
                type: 'tag',
                name:'cffunction',
                attribs: { name: 'bar' },
                line: 2,
                col: 11
              }
            ]
          }
      )
    })

    it('should parse a string attribute', () => {
      var handler = new CfmlHandler()
      var parser = new CfmlParser(handler)

      var cfml =
        `<cfcomponent name="foo">
         </cfcomponent>`

      parser.writeLine(cfml)
      parser.done()

      var elem = handler.dom[0]
      elem.should.have.property('attribs')
      elem.attribs.should.have.property('name').and.equal('foo');
    })

  })
})
