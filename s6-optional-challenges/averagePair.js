function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.lenght - 1;

  while (left < right) {
    const avg = parseInt((arr[left] + arr[right]) / 2);

    if (avg === targetAvg) return true;
    if (avg < targetAvg) {
      left++;
    } else {
      right++;
    }
  }
  return false;
}

const arr = [12, 4, 8, 23, 345, 346, -23, -5, 345, 123].sort((a, b) => a - b);
console.log(arr);
console.log(averagePair(arr, 6));
