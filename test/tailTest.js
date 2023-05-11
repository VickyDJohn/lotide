const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns tail of array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs", "Some"];
    assert.strictEqual(tail(words).length, 3);
  });
  it("returns undefined if input has no elements", () => {
    const array = [];
    assert.strictEqual(tail(array), undefined);
  });
});