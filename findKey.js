const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result = "";
  for (let val in object) {
    if (callback(object[val])) {
      result = val;
    }
  }
  return result;
};

const result1 = findKey({a: 1, b: 2, c: 3}, x => x % 2 === 0);
assertEqual(result1, "b"); 

// Test Case 2
const result2 = findKey({name: "John", age: 30, city: "New York"}, x => x === "New York");
assertEqual(result2, "city");

// Test Case 3
const result3 = findKey({a: "apple", b: "banana", c: "cherry"}, x => x === "orange");
assertEqual(result3, "");

// Test Case 4
const result4 = findKey({a: 1, b: 3, c: 5}, x => x % 2 === 0);
assertEqual(result4, "");

// Test Case 5
const result5 = findKey({x: 1, y: 2, z: 3}, x => x > 2);
assertEqual(result5, "z");