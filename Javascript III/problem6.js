function swapCaseChar(char) {
    return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
}

function swapCaseWord(word) {
    return word.split('').map(swapCaseChar).join('');
}

function swapCaseString(str) {
    return str.split(' ').map(swapCaseWord).join(' ');
}

const inputString = "Test";

const outputString = swapCaseString(inputString);

console.log(outputString);
