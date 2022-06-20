const stringSearch = (inputString, patternString) => {
    let counter = 0;

    for (let i = 0; i < inputString.length; i++) {
        let didLoop = true;

        if (i + patternString.length > inputString.length) break;

        for (let j = 0; j < patternString.length; j++) {
            if (inputString[i + j] != patternString[j]) {
                didLoop = false;
                break;
            }
        }

        if (didLoop) {
            counter++;
        }
    }

    return counter;
};

console.log(stringSearch("Ana are mere", "ree"));
console.log(stringSearch("lorie loled", "lo"));
