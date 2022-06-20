function takeShower() {
    return "Showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!");
}

// wakeUp()

// EXAMPLE 2

function countDown(num) {
    if (num <= 0) {
        console.log("Countdown finished!!");
        return;
    }
    console.log(num);
    countDown(--num);
}

countDown(-20);

// EXAMPLE 3
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(10));

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

let number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);
