const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it('should return true when values are equal', function() {
    assert.strictEqual(assertEqual(5, 5), '✔️ Assertion Passed: 5 === 5');
  });
  it("returns false when checking if 1 equals a", () => {
    assert.strictEqual(assertEqual(1, "a"), '❌ Assertion Failed: 1 !== a');
  });
});