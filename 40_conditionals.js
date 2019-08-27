const bigNumber = (numA, numB) => {
    if (numA >= numB) {
        console.log('A is big!');
    } else {
        console.log('B is big!');
    }
};

bigNumber(4, 89);

const registerToVote = (age) => {
    if (age >= 18) {
        console.log("You are " + age + ". Have you registered to vote?");
    } else {
        console.log("You are " + age + ". You are not old enough to vote.");
    }
};

registerToVote(17);
registerToVote(21);

// Write a function that accepts 2 numbers and returns whichever number is the higher number.
const max = (a, b) => {
    return (a >= b) ? a : b
};

const result = max(1, 2);
console.log(result + ' should be 2');

// 1. Write a function that accepts a number as a parameter and prints a message that depends on the number.
// Ex: If you invoke the function with 29, it might print, 'Wow, it is hot today!'
const numberMessage = (a) => {
    if (a === 29) {
        console.log('Wow, it is hot today!');
    } else if (a > 29) {
        console.log('Wow, it is super hot today!!');
    } else {
        console.log('Put on a jacket');
    }
}