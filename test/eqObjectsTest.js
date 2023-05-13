const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for objects with identical key-value pairs", () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 2 };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("returns false for objects with different key-value pairs", () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 3 };
    assert.isFalse(eqObjects(object1, object2));
  });

  it("returns true for objects with nested arrays that are identical", () => {
    const object1 = { a: [1, 2], b: [3, 4] };
    const object2 = { a: [1, 2], b: [3, 4] };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("returns false for objects with nested arrays that are different", () => {
    const object1 = { a: [1, 2], b: [3, 4] };
    const object2 = { a: [1, 2], b: [3, 5] };
    assert.isFalse(eqObjects(object1, object2));
  });

  it("returns false for objects with nested objects that are different", () => {
    const object1 = { a: { x: 1, y: 2 }, b: { z: 3 } };
    const object2 = { a: { x: 1, y: 2 }, b: { z: 4 } };
    assert.isFalse(eqObjects(object1, object2));
  });
});