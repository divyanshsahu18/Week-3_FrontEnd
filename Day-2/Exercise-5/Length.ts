// Define a type alias for the input parameter
type StringOrArray = string | any[];

// Define the function that accepts a string or an array and returns its length
function getLength(input: StringOrArray): number {
    return input.length;
}

// Test the function with different inputs
const strLength = getLength("Hello, TypeScript!"); // Returns the length of the string: 19
const arrLength = getLength([1, 2, 3, 4, 5]);      // Returns the length of the array: 5
