function findSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

function calculateAverage(arr) {
    const sum = findSum(arr);
    const length = arr.length;

    if (length === 0) {
        return 0;
    }

    return sum / length;
}

const numbers = [5, 10, 15, 20, 25];
const average = calculateAverage(numbers);
console.log("Average:", average);

const emptyArray = [];
const averageEmptyArray = calculateAverage(emptyArray);
console.log("Average of empty array:", averageEmptyArray);
