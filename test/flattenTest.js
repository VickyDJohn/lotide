const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, [2, 3], [4, 5, 6]]", () => {
    const input = [1, [2, 3], [4, 5, 6]];
    assert.deepEqual(flatten(input), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [1, 2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    const input = [1, 2, 3, 4, 5];
    assert.deepEqual(flatten(input), [1, 2, 3, 4, 5]);
  });
});