function fib(nthNum) {
    if (nthNum <= 2) return 1; //first and second numbers of the sequence are 1, these being the base cases
    // any number in the sequence is defined as the combination of the 2 previous ones
    return fib(nthNum - 1) + fib(nthNum - 2);
}
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
