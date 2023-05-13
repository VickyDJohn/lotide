const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns the correct letter positions for a given sentence", () => {
    const sentence = "hello";
    const expectedOutput = {
      'h': [0],
      'e': [1],
      'l': [2, 3],
      'o': [4]
    };
    assert.deepEqual(letterPositions(sentence), expectedOutput);
  });

  it("returns an empty object for an empty sentence", () => {
    const sentence = "";
    const expectedOutput = {};
    assert.deepEqual(letterPositions(sentence), expectedOutput);
  });
  it("returns the correct letter positions for the word 'goodbye'", () => {
    const sentence = "goodbye";
    const expectedOutput = {
      'g': [0],
      'o': [1, 2],
      'd': [3],
      'b': [4],
      'y': [5],
      'e': [6]
    };
    const result = letterPositions(sentence);
    assert.deepStrictEqual(result, expectedOutput);
  });
});