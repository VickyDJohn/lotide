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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let keyValue of keys1) {
    if (Array.isArray(object1[keyValue]) && Array.isArray(object2[keyValue])) {
      if (!eqArrays(Object.values(object1[keyValue]), Object.values(object2[keyValue]))) {
        return false;
      }
    } else if (object1[keyValue] !== object2[keyValue]) {
      return false;
    }
  }
  return true;
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red"};
// console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true));

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true));

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false));

const obj1 = {a: 1, b: 2};
const obj2 = {b: 2, a: 1};
const obj3 = {a: 1, b: 3};

console.log(eqObjects(obj1, obj2));
console.log(eqObjects(obj1, obj3));