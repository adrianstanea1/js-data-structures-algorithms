function isSubsequence(str1, str2) {
  //   let input1 = str1.split("");

  //   for (let i = 0; i < str2.length; i++) {
  //     if (input1.length === 0) return true;

  //     if (str2[i] === input1[0]) {
  //       input1.shift();
  //     }
  //   }

  //   return input1.length === 0;

  //   even beter this way because i dont use extra space
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;

    if (i === str1.length) return true;
  }
  return false;
}

let str1 = "hello";
let str2 = "hello world";

console.log(isSubsequence(str1, str2));
