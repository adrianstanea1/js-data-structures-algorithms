// MY SOLUTION

// function isAnagram(str1, str2) {
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   const regex = /[0-9a-zA-Z]/;

//   for (let char of str1) {
//     if (!char.match(regex)) continue;

//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }
//   for (let char of str2) {
//     if (!char.match(regex)) continue;

//     frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//   }
//   if (frequencyCounter1.length !== frequencyCounter2.length) return false;

//   for (let key in str1) {
//     if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
//   }

//   // console.log(frequencyCounter1, frequencyCounter2);
//   return true;
// }

// str1 = "cinema_";
// str2 = "iceman";

// console.log(isAnagram(str1, str2));

//COLT'S SOLUTION

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram("anagrams", "nagaramm");
