const flatten = (inputArr) => {
    const result = [];

    inputArr.forEach((item) => {
        if (typeof item === typeof []) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });

    return result;
};

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const arr = [1, 2, [3, [4, 5]]];
console.log(flatten(arr));
