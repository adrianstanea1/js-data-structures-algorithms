function isPalindrome(str) {
    const regex = /[a-zA-z0-9]/g;
    const tempArr = str.split("").filter((elem) => elem.match(regex));

    function helper(arr) {
        if (arr.length <= 1) return true;
        if (arr.length === 2) return arr[0] === arr[1];
        if (arr[0] !== arr[arr.length - 1]) return false;

        return helper(arr.slice(1, arr.length - 1));
    }

    const result = helper(tempArr);
    return result;
}
testStr = "abcddcba";
console.log(isPalindrome(testStr));
