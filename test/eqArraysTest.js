const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true when checking if [1, 2, 3] equals [1, 2, 3]", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.strictEqual(eqArrays(array1, array2), true);
  });
  it("returns false when checking if ['1', '2', '3'] equals ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});