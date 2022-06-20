function isAlphaNumeric(str) {
  let code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

// function charCount(str) {
//   result = {};

//   const regex = /^[0-9a-zA-Z]+$/;
//   for (let char of str) {
//     if (!char.match(regex)) continue;
//     char = char.toLowerCase();

//     result[char] = result.hasOwnProperty(char) ? result[char] + 1 : 1;
//   }
//   return result;
// }

function charCount(str) {
  result = {};

  for (let char of str) {
    //check for valid characters
    if (!isAlphaNumeric(char)) continue;
    char = char.toLowerCase();
    // each time update the current val, but the first time i encounter a new char i  initialize it to 1
    result[char] = result.hasOwnProperty(char) ? ++result[char] : 1;
  }
  return result;
}

console.log(charCount("Aab_ee_aba"));
