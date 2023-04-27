const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let newObj1 = Object.keys(object1);
  let newObj2 = Object.keys(object2);
  for (let keyValue of newObj1) {
    if (newObj1[keyValue] === newObj2[keyValue]) {
      return true;
    } else {
      return false;
    }
  }
}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red"};
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));