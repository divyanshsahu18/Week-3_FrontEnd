// Define the function that accepts a string or an array and returns its length
function getLengths(input) {
    return input.length;
}
// Test the function with different inputs
var strLengths = getLengths("Hello, TypeScript!"); // Returns the length of the string: 19
var arrLengths = getLengths([1, 2, 3, 4, 5]); // Returns the length of the array: 5
console.log(strLengths, arrLengths);