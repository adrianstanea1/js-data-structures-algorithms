function sameFrequency(num1, num2) {
  const digits1 = {};
  const digits2 = {};

  while (num1 !== 0) {
    let currentDigit = parseInt(num1 % 10);
    digits1[currentDigit] = (digits1[currentDigit] || 0) + 1;
    num1 = parseInt(num1 / 10);
  }

  while (num2 !== 0) {
    let currentDigit = parseInt(num2 % 10);
    digits2[currentDigit] = (digits2[currentDigit] || 0) + 1;
    num2 = parseInt(num2 / 10);
  }

  if (Object.keys(digits1).length !== Object.keys(digits2).length) return false;

  for (let key in digits1) {
    if (digits1[key] !== digits2[key]) return false;
  }

  return true;
}

num1 = 182;
num2 = 218;

console.log(sameFrequency(num1, num2));
