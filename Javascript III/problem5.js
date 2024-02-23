function toLowerCaseChar(char) {
    return char.toLowerCase();
}

function toLowerCaseWord(word) {
    return word.split('').map(toLowerCaseChar).join('');
}

function toLowerCaseArray(arr) {
    return arr.map(toLowerCaseWord);
}

const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

const outputArray = toLowerCaseArray(inputArray);

console.log(outputArray);
