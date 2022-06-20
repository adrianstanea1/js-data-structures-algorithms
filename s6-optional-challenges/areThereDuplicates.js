// function areThereDuplicates(...args) {
//   const sortedArgs = args.sort((a, b) => a - b);

//   let currentIdx = 0;

//   for (let i = 1; i < sortedArgs.length; i++) {
//     if (sortedArgs[currentIdx] !== sortedArgs[i]) {
//       sortedArgs[++currentIdx] = sortedArgs[i];
//     }
//   }
//   //   increment so that currentIdx points past the end, and that s what we need when using splice
//   currentIdx++;
//   return sortedArgs.slice(0, currentIdx);
// }

// function areThereDuplicates(...args) {
//   const arr = args.sort((a, b) => a - b);

//   for (let i = 0, j = 1; j < arr.length - 1; j++, i++) {
//     if (arr[i] == arr[j]) return true;
//   }
//   return false;
// }

function areThereDuplicates(...args) {
  if (!args || args.length === 0) return undefined;

  const set = new Set(args);
  return set.size === args.length ? false : true;
}

const arr = [1, -1, 2, 2, 3, 5, 6];
console.log(areThereDuplicates(...arr));
