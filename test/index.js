var str2bin = require('../src');
var assert = require('assert');

describe("converting to binary", function() {
    it("converts an empty string", function() {
        assert.equal(str2bin.strToBin(''), '');
    });

    it("converts a string", function() {
        assert.equal(str2bin.strToBin('hello'), '01101000 01100101 01101100 01101100 01101111');
    });

    it("converts a string with unicode", function() {
        assert.equal(str2bin.binToStr('01101000 01100101 01101100 01101100 01101111'), 'hello');
    });
});
