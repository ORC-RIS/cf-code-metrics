"use strict"

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var analyzer = require("../lib/analyzer.js")

describe('Analyzer', () => {
  describe('#analyze', () => {

    it('should reject a promise when the path do not exists', () => {
      return expect(analyzer.analyze('./test/analyzer/data/non-existent-directory')).to.eventually.be.rejected
    })

    it('should return empty json when the are no files to analyze', () => {
      var emptyResult = analyzer.newAnalysisObject()
      emptyResult.path = './test/analyzer/data/empty-dir'
      return expect(analyzer.analyze('./test/analyzer/data/empty-dir')).to.eventually.deep.equal(emptyResult);
    })

    it('should return the name of analyzed directory as path property', () => {
      return expect(analyzer.analyze('./test/analyzer/data/empty-dir')).to.eventually
        .have.property('path')
        .and.is.equal('./test/analyzer/data/empty-dir');
    })

    it('should analyze subdirectories', () => {
      return expect(analyzer.analyze('./test/analyzer/data/subdirectories')).to.eventually.equal(null)
    })

    it('should ignore any non cfml or cfc file', () => {
      return expect(analyzer.analyze('./test/analyzer/data/ignore-non-supported-files')).to.eventually.equal(null);
    })

    it('should avoid cfml comments', () => {
      return expect(analyzer.analyze('./test/analyzer/data/cfml-comments')).to.eventually.equal(null)
    })

    it('should avoid js comments', () => {
      return expect(analyzer.analyze('./test/analyzer/data/js-comments')).to.eventually.equal(null)
    })

    it('should avoid html comments', () => {
      return expect(analyzer.analyze('./test/analyzer/data/html-comments')).to.eventually.equal(null)
    })

    it('should find any <cfinclude /> relation', () => {
      return expect(analyzer.analyze('./test/analyzer/data/simple-cfinclude')).to.eventually.equal(null)
    })

    it('should support circular <cfinclude /> relations', () => {
      return expect(analyzer.analyze('./test/analyzer/data/circular-cfinclude')).to.eventually.equal(null)
    })

  })
})
