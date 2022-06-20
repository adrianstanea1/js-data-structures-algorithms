function averagePair(arr, targetPair) {
  if (!arr) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentValue = (arr[left] + arr[right]) / 2;

    if (currentValue === targetPair) return true;

    if (currentValue < targetPair) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

let arr = [1, 2, 3];
arr = [-1, 3, 3, 4, 5, 6, 10, 12, 19];
arr = [];
let target = 2.5;
target = 4.1;
console.log(averagePair(arr, target));
