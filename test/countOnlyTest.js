const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns the correct count for selected items in the array", () => {
    const allItems = ['a', 'b', 'a', 'c', 'a', 'b'];
    const itemsToCount = { 'a': true, 'b': true };
    const expectedOutput = { 'a': 3, 'b': 2 };
    assert.deepEqual(countOnly(allItems, itemsToCount), expectedOutput);
  });

  it("returns an empty object when no items are selected to count", () => {
    const allItems = ['a', 'b', 'c'];
    const itemsToCount = { 'x': true, 'y': true };
    const expectedOutput = {};
    assert.deepEqual(countOnly(allItems, itemsToCount), expectedOutput);
  });

  it("returns the correct count when there are duplicate items in the array", () => {
    const allItems = ['a', 'b', 'b', 'c', 'c', 'c'];
    const itemsToCount = { 'b': true, 'c': true };
    const expectedOutput = { 'b': 2, 'c': 3 };
    assert.deepEqual(countOnly(allItems, itemsToCount), expectedOutput);
  });
});