/// string_reverser.js

// Function to reverse a given string
function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  return str.split("").reverse().join("");
}

// Retrieve the input string from command-line arguments
const input = process.argv[2];

// Check if an input string was provided
if (input) {
  // If input exists, log the reversed string to the console
  console.log(`Reversed string: ${reverseString(input)}`);
} else {
  // If no input provided, display usage instructions
  console.log("Usage: node string_reverser.js <string>");
}
