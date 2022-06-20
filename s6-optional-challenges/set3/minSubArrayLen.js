function minSubArrayLen(arr, target) {
    if (arr.length === 0) return null;

    let result = Number.MAX_SAFE_INTEGER;

    let val_sum = 0;
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        val_sum += arr[i];

        // keep adding till i get one possible solution
        while (val_sum >= target) {
            // when i get a possible solution i store it

            // then i try to minimize to solution by poping from the fron and trying again to create
            // on the next iteration another combination but with shorter length
            result = Math.min(result, i - left + 1); // +1 bcs arr start from 0 but i want to count from 1
            val_sum -= arr[left++];
        }
    }
    return result != Number.MAX_SAFE_INTEGER ? result : 0;
}

let arr = [1, 1, 1, 1, 2, 2, 3, 4];
let target = 5;

console.log(minSubArrayLen(arr, target));
