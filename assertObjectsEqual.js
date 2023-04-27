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
      if (eqArrays(Object.values(object1[keyValue]) !== Object.values(object2[keyValue]))) {
        return false;
      }
    } else if (object1[keyValue] !== object2[keyValue]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔️  Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}]`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
}

// // Test case 1 - identical objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };
// assertObjectsEqual(obj1, obj2); // should pass

// // Test case 2 - different key order
// const obj3 = { b: 2, a: 1 };
// assertObjectsEqual(obj1, obj3); // should pass

// // Test case 3 - different values for same keys
// const obj4 = { a: 3, b: 2 };
// assertObjectsEqual(obj1, obj4); // should fail

// // Test case 4 - extra key in one object
// const obj5 = { a: 1, b: 2, c: 3 };
// assertObjectsEqual(obj1, obj5); // should fail

// // Test case 5 - missing key in one object
// const obj6 = { a: 1 };
// assertObjectsEqual(obj1, obj6); // should fail