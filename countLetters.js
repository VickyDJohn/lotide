const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countLetters = function(str) {
  let numLetters = {};
  for (let i = 0; i < str.length; i++) {
    if (numLetters[str[i]]) {
      numLetters[str[i]]++;
    } else {
      numLetters[str[i]] = 1;
    }
  }
  return numLetters;
}

console.log(countLetters("lighthouse in the house"));