// array of strings
const studentArr = ["Oumou", "Susma", "Gilberto", "Hsa"];
console.log(studentArr);

// array of numbers
const favoriteNums = [10, 13, 16, 17, 18];
console.log(favoriteNums);

// array of mixed types - don't do this
const mixedArr = ["string", 3, false];
console.log(mixedArr);

// empty array
const emptyArr = [];
console.log(emptyArr);

// array methods
// 1. Declare a variable whose value is an empty array. Use any method you choose to add at least 4 items to it.
let initialArray = [];
initialArray.push(1, 2, 3, 4);
console.log(initialArray)
initialArray.push(5, 6);
console.log(initialArray);
// 2. Add an additional item to the beginning of your array.
initialArray.unshift(0);
// 3. Remove the second and third items.
initialArray = initialArray.slice(0, 1).concat(initialArray.slice(3, initialArray.length))
// 4. Add two new items after the second item.
let firstHalf = initialArray.slice(0, 2);
firstHalf.push(98, 99);
let secondHalf = initialArray.slice(2, initialArray.length);
initialArray = firstHalf.concat(secondHalf)

// 5. Write 'The current length of the array is....' using the .length method
console.log('The current length of the array is....' + initialArray.length)
// Use the following array for questions 6-11:
let things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
let matchIndex = things.findIndex(item => item === 'mouse');
if (matchIndex != -1) {
    things[matchIndex] = 'keyboard';
}

// 7. Combine all of the elements of the array into one string.
things.toString();

// 8. Declare a variable called `items`, and initialize it to contain 2 strings.
//  Add two new items to items, one at the beginning and one at the end.
let items = ['aerosmith', 'bon jovi'];
items.unshift('ac/dc', 'motley crue');
items.push('def leppard', 'van halen');

// 9. Create a new array called reverseItems. The items should be the same as items, only in reverse order.
let reverseItems = items.reverse();
// 10. Remove the first item of reverseItems.
reverseItems.shift()
// 11. Remove all items from reverseItems.
reverseItems = []
// 12. Using the arrays below, create a single array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
let firstArray = [12, 5, 9, 27];
let secondArray = ['fish', 'dog'];
const numberPets = firstArray.concat(secondArray)


// Use the following array for questions 13-16:

let people = ['Saba', 'Tobi', 'Ollie', 'Anil', 'Donal'];

// 13. Add two new people after 'Donal'
people.push('Adam', 'Nick')

// 14. Remove everybody except 'Anil' and 'Tobi'
people = people.filter(name => (name === 'Anil' || name === 'Tobi'))

// 15. Add a new person to the beginning of the array
people.unshift('George')
// 16. Arrange the items alphabetically. Store this array as orderedPeople
let orderedPeople = people.sort();


// 17. Create an array of arrays with the following three arrays:
let array1 = ["Fido", "Spot", "Rex", "Sparky"];
let array2 = ["Bulldog", "Lab", "Dalmatian", "Beagle"];
let array3 = ["White", "Black", "Spotted", "Brindle"];
let arrayArray = [array1, array2, array3]
// 18. Remove "Sparky" and "White" from the above array of arrays.
arrayArray.forEach()

// 19. Arrange the numbers in the following array from smallest to largest value.
let sortingNumbers = [2, 5, 98, 55, 77, 300];
sortingNumbers = sortingNumbers.sort(cmpfcn = (a, b) => {return a-b});


// 20. Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
let array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

//Goal: array2 = ['plant', 17, 2, 'Bill', 'dog'];