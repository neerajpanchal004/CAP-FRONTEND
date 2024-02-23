function isOdd(number) {
    return number % 2 !== 0;
}

function printOddNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (isOdd(i)) {
            console.log(i);
        }
    }
}

console.log("Odd numbers from 0 to 10:");
printOddNumbers(10);
