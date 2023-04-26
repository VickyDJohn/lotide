const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countLetters = function(str) {
  let numLetters = [];
  for (let letter of str) {
    console.log(letter);
  }
}

countLetters("lighthouse in the house")