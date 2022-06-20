function maxSubarraySum(arr, range) {
  if (range > arr.length) return null;

  let i = 0;
  let maxSum = 0;
  while (i < range) maxSum += arr[i];
  let currentSum = maxSum;
  for (i = range; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - range];

    maxSum = currentSum > maxSum ? currentSum : maxSum;
  }

  return maxSum;
}
