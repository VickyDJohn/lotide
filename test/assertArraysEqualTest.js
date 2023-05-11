const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it('should return assertion passed when both arrays are equal', function() {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), '✔️ Assertion Passed: [1,2,3] === [1,2,3]');
  });
  it("should return assertion failed when both arrays are unequal", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [3,2,1]), '❌ Assertion Failed: [1,2,3] !== [3,2,1]');
  });
});