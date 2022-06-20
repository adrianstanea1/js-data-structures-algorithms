// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of
// n consecutive elements in the array.

function maxSubarray(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  //   i get the sum of the elements up to num in the arr
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; //copy the maxSum;

  //   i already know the sum of the first num numbers
  // i keep going till the end and each time i calculate the sum of the current numbers
  // by subtracting the last added item and adding the new number from the current idx

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarray([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarray([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarray([4, 2, 1, 6], 1)); // 6
console.log(maxSubarray([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarray([], 4)); // null
