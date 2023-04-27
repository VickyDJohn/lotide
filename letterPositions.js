const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️  Assertion Passed: [${arr1}]  ===  [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}]  !== [${arr2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  let results = {};
  for (i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]] = i;
    } else {
      results[sentence[i]] = i;
    }
  }
  return results;
};

console.log(letterPositions("hello"));