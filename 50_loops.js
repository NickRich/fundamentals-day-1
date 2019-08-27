// uses console.log to log the numbers 0-9');
const logNumbers = () => {
    for (let i = 0; i < 9; i++) {
        console.log(i);
    }
};

logNumbers();

// Write a function that accepts 2 numbers (begin and end of a range).
// Loop through the range and print a message for each.
const printRange = (start, end) => {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

printRange(12, 23);
