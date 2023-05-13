const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns the correct key for a given value in the object", () => {
    const object = {
      'apple': 1,
      'banana': 2,
      'orange': 3,
      'mango': 4
    };
    const value = 3;
    const expectedOutput = 'orange';
    assert.strictEqual(findKeyByValue(object, value), expectedOutput);
  });

  it("returns undefined if the value is not found in the object", () => {
    const object = {
      'apple': 1,
      'banana': 2,
      'orange': 3,
      'mango': 4
    };
    const value = 5;
    const expectedOutput = undefined;
    assert.strictEqual(findKeyByValue(object, value), expectedOutput);
  });
});
