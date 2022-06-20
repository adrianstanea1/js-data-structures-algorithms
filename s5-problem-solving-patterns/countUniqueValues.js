// we are allowed to alter the original array
// this way we can solve the probel in O(1) space and O(n) time since we only scan once through the array

// i move the items so that at the end items of the arr up to currentIdx will be all unique,
// hence currentIdx++ represent the number of unique nums, or we can use it to splice the original arr and return all the unique items
function countUniqueValues(arr) {
  const result = [];
  let currentIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[currentIdx] !== arr[i]) {
      arr[++currentIdx] = arr[i];
    }
  }
  return arr.splice(0, currentIdx + 1);
}
// i get a sorted arr and have to return all the values that are unique in the array
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// COLT S SOLUTION

// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

obj = { a: 4 };
console.log(obj["a"] || "Wtf");
