// Assignment 1: Check if user value is bigger than 100 or less
let value = +prompt("Enter a number to check if it is greater than or less than 100:");
if (value > 100) {
  console.log("The value is greater than 100.");
} else if (value < 100) {
  alert("The value is less than 100.");
} else {
  alert("The value is exactly 100.");
}

// Assignment 2: Check which user value is greater (First vs Second)
let first = +prompt("Enter the first number:");
let second = +prompt("Enter the second number:");
if (first > second) {
  alert("First value is greater.");
} else if (second > first) {
  alert("Second value is greater.");
} else {
  alert("Both values are equal.");
}

// Assignment 3: Check if user value is perfectly divisible by 2
let num = +prompt("Enter a number to check if it is divisible by 2:");
if (num % 2 === 0) {
  alert("The number is divisible by 2.");
} else {
  alert("The number is NOT divisible by 2.");
}

// Assignment 4: Check if user value is perfectly divisible by 3
num = +prompt("Enter a number to check if it is divisible by 3:");
if (num % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is NOT divisible by 3.");
}

// Assignment 5: Check if user value is perfectly divisible by 5
num = +prompt("Enter a number to check if it is divisible by 5:");
if (num % 5 === 0) {
  alert("The number is divisible by 5.");
} else {
  alert("The number is NOT divisible by 5.");
}

// Assignment 6: Get remainder when divided by 2
num = +prompt("Enter a number to get the remainder when divided by 2:");
alert("Remainder when divided by 2:", num % 2);

// Assignment 7: Get remainder when divided by 3
num = +prompt("Enter a number to get the remainder when divided by 3:");
alert("Remainder when divided by 3:", num % 3);

// Assignment 8: Get remainder when divided by 5
num = +prompt("Enter a number to get the remainder when divided by 5:");
alert("Remainder when divided by 5:", num % 5);
