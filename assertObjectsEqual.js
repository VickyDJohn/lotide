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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let keyValue of keys1) {
    if (Array.isArray(object1[keyValue]) && Array.isArray(object2[keyValue])) {
      return eqArrays(Object.values(object1[keyValue]), Object.values(object2[keyValue]))
    } else if (Object.keys(object1)[keyValue] === Object.keys(object2)[keyValue]) {
      return true;
    } else {
      return false;
    }
  }
}

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✔️  Assertion Passed: [${actual}]  ===  [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}]  !== [${expected}]`);
  }
}

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}); // expected output: Assertion Passed
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2, c: 3}); // expected output: Assertion Failed