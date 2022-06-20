function reverse(str) {
    let result = [];

    function utility(input) {
        if (input.length === 0) return;
        utility(input.substring(1));

        result.push(input[0]);
    }
    utility(str);
    return result.join("");
}
const testStr = "1234";

console.log(reverse(testStr));
