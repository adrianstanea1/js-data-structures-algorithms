// get 2 input arr, and check if the second contains all the elements of the first one squared
function same(arr1, arr2) {
  if (arr1.length != arr2.length || arr1.length === 0 || arr2.length === 0)
    return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[Math.pow(key, 2)])
      return false;
  }

  return true;
}
// ANOTHER APPROACH USING SORTING INSTED OF USING A FREQ COUNTER
//   arr1.sort();
//   arr2.sort();

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2[i] != Math.pow(arr1[i], 2)) return false;
//   }

arr1 = [1, 2, 3, 2, 3, 4];
arr2 = [9, 1, 4, 4, 9, 16];

console.log(same(arr1, arr2));
