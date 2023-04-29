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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]); // should pass
assertArraysEqual(map([], num => num * 2), []); // should pass
assertArraysEqual(map(["apple", "banana", "cherry"], fruit => fruit.length), [5, 6, 6]); // should pass
assertArraysEqual(map([true, false], bool => bool ? 1 : 0), [1, 0]); // should pass
assertArraysEqual(map(["hello", "world"], str => str.toUpperCase()), ["HELLO", "WORLD"]); // should pass