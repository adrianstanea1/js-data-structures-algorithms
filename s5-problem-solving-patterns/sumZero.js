// i get a sorted array and have to return the first pair of numbers that add to zero

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return [undefined, undefined];
}

testArr = [-8, -3, -2, -1, 0, 10];
console.log(testArr);
console.log(sumZero(testArr));
