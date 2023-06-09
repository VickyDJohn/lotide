const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  let results = {};
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

// const result3 = letterPositions("goodbye");
// assertArraysEqual(result3['g'], [0]);
// assertArraysEqual(result3['o'], [1, 2]);
// assertArraysEqual(result3['d'], [3]);
// assertArraysEqual(result3['b'], [4]);
// assertArraysEqual(result3['y'], [5]);
// assertArraysEqual(result3['e'], [6]);

// const result2 = letterPositions("lighthouse in the house");
// assertArraysEqual(result2['l'], [0]);
// assertArraysEqual(result2['i'], [1, 11]);
// assertArraysEqual(result2['g'], [2]);
// assertArraysEqual(result2['h'], [3, 5, 15, 18]);
// assertArraysEqual(result2['t'], [4, 14]);
// assertArraysEqual(result2['o'], [6, 19]);
// assertArraysEqual(result2['u'], [7, 20]);
// assertArraysEqual(result2['s'], [8, 21]);
// assertArraysEqual(result2['e'], [9, 16, 22]);
// assertArraysEqual(result2['n'], [12]);