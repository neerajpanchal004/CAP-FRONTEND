function addNumbers(num1, num2) {
    return num1 + num2;
}

let num1 = 5;
let num2 = 7;
let num3 = 10;

let sum_of_two_numbers = addNumbers(num1, num2);
let result = addNumbers(sum_of_two_numbers, num3);

console.log(result);
