function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

const arr = [1, 2, 3, 4];
console.log(productOfArray(arr));
