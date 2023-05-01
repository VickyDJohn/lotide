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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️  Assertion Passed: [${arr1}]  ===  [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}]  !== [${arr2}]`);
  }
};

const takeUntil = function(array, callback) {
  const result = [];
  for (let value of array) {
    if (callback(value)) {
      break;
    }
    result.push(value);
  }
  if (result.length === array.length) {
    return "There is no such value/text in the given array";
  }
  return result;
}