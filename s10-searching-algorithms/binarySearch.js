function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === val) return mid;
        if (arr[mid] < val) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5].sort((a, b) => a - b);

console.log(arr, arr.length);
console.log(binarySearch(arr, 2));
