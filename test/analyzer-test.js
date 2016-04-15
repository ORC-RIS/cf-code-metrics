"use strict"

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var analyzer = require("../lib/analyzer.js")

describe('Analyzer', function() {
  describe('#analyze', function () {
    it('should reject a promise when the path do not exists', function () {
      return expect(analyzer.analyze('./test/analyzer/data/non-existent-directory')).to.eventually.be.rejected
    })
    it('should return empty json when the are no files to analyze', function () {
      return expect(analyzer.analyze('./test/analyzer/data/empty-dir')).to.deep.equal({});
    })
    it('should analyze subdirectories', function () {
      return expect(analyzer.analyze('./test/analyzer/data/subdirectories')).to.eventually.equal(null)
    })
    it('should ignore any non cfml or cfc file', function () {
      return expect(analyzer.analyze('./test/analyzer/data/ignore-non-supported-files')).to.eventually.equal(null);
    })
    it('should avoid cfml comments', function () {
      return expect(analyzer.analyze('./test/analyzer/data/cfml-comments')).to.eventually.equal(null)
    })
    it('should avoid js comments', function () {
      return expect(analyzer.analyze('./test/analyzer/data/js-comments')).to.eventually.equal(null)
    })
    it('should avoid html comments', function () {
      return expect(analyzer.analyze('./test/analyzer/data/html-comments')).to.eventually.equal(null)
    })
    it('should find any <cfinclude /> relation', function () {
      return expect(analyzer.analyze('./test/analyzer/data/simple-cfinclude')).to.eventually.equal(null)
    })
    it('should support circular <cfinclude /> relations', function () {
      return expect(analyzer.analyze('./test/analyzer/data/circular-cfinclude')).to.eventually.equal(null)
    })
  })
})
