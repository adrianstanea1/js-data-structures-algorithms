const someRecursive = (arr, fun) => {
        if (arr.length === 0) return false;
        if (fun(arr[0])) return true;
        return someRecursive(arr.slice(1, arr.length), fun);
};

const arr = [2, 4, 6, 8, 7];
const isOdd = (num) => num % 2 !== 0;

console.log(someRecursive(arr, isOdd));
