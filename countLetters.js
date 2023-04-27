const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countLetters = function(str) {
  const lowerCaseStr = str.toLowerCase();
  let numLetters = {};
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (numLetters[lowerCaseStr[i]]) {
      numLetters[lowerCaseStr[i]]++;
    } else {
      numLetters[lowerCaseStr[i]] = 1;
    }
  }
  delete numLetters[" "];
  return numLetters;
}

console.log(countLetters("lighthouse in the House"));