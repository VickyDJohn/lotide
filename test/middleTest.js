const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns middle element of array with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns middle element of array with odd number of elements", () => {
    const array = [];
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});