// console.log("Hello, World!")

// Declaring variables using let
// let first = "John";
// let last = "Doe";

// console.log(first);
// console.log(last);

// Re-assigning variables
// let age = 11;
// console.log(age);

// age = 54;
// console.log(age);

// Using const to keep a variable constant
// const pi = 3.14;
// pi = 10;

// This throws a TypeError since pi is a constant
// console.log(pi);

// Working with numbers
// console.log((3 + 2) - 76 * (1 + 1))

// SOLVING FIZZBUZZ
// Writing the pseudocode. (Provided by TOP)
// 1. When a user inputs a number
// 2. Loop from 1 to the entered number
// 3. If the current number is divisible by 3 then print "Fizz"
// 4. If the current nubmer is divisble by 5 then print "Buzz"
// 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6. Otherwise print the current number

     let answer = parseInt(
      prompt("Please enter the number you would like to FizzBuzz up to: "));

      for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
          console.log("FizzBuzz")
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i)
        }
      }