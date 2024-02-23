function findDifference(num1, num2) {
    return num1 - num2;
}

function findAbsoluteValue(number) {
    return Math.abs(number);
}

let input1Num1 = 12;
let input1Num2 = 4;
let difference1 = findDifference(input1Num1, input1Num2);
let absoluteDifference1 = findAbsoluteValue(difference1);
console.log("Sample Output-1:", absoluteDifference1);

let input2Num1 = 4;
let input2Num2 = 18;
let difference2 = findDifference(input2Num1, input2Num2);
let absoluteDifference2 = findAbsoluteValue(difference2);
console.log("Sample Output-2:", absoluteDifference2);
