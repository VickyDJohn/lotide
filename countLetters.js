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
for (let ch of str) {
  if (ch !== " ") {
    if (numLetters[ch]) {
      numLetters[ch] += 1
    } else {
      numLetters[ch] = 1
    }
  }
}

const test1 = countLetters("Lighthouse Labs");
assertEqual(test1["l"], 2)

// const test2 = countLetters("ObjeCts aRe ExtRemElY hARd To undeRStAnD");
// assertEqual(test2["o"], 0);