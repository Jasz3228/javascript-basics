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

// Assignments from foundations, Variables and operators
    
  // 1. Add 2 numbers together! In your script, type in console.log(23 + 97). Running this should log 120.
    //console.log(23 + 97);

  // 2. Do the same thing but add 6 different numbers together.
    // console.log(20 + 15 + 30 + 45 + 29 + 99);

  // 3. Now log the value of the following expression: (4 + 6 + 9) / 77. The console should log approximately 0.24675.
    // console.log((4 + 6 + 9) / 77);

  // 4.Add this statement to the script tag: let a = 10.
    // let a = 10;
    // console.log(a);

  // 5. Afterwards, re-assign a with a different number value. Log a again    afterwards and it should show the updated value (the previous log should     still show the old value of 10 since that was before a was re-assigned).
    // a = 15;
    // console.log(a);

  // 6. Now add to the bottom of the script let b = 7 * a.
    // let b = 7 * a;
    // console.log(b);

  // 7. Declare a const variable max with the value 57.
    // const max = 57;
    // Declare another const variable actual and assign it max - 13.
    // const actual = max - 13;
    // Declare another const variable percentage and assign it actual / max.
    // const percentage = actual / max;
    
    // console.log(percentage);

  // FOUNDATIONS FUNCTIONS BASICS

  
    // 1. Write a function called add7 that takes one number and returns that   number + 7.

    /*function add7(num) {
      return num + 7;
    }
    console.log(add7(10));*/

    // 2. Write a function called multiply that takes 2 numbers and returns their product.

    /*function multiply(num1, num2) {
      return num1 * num2;
    }
    console.log(multiply(5, 2));*/

    // 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

    // function capitalize(str) {
    //   return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
    // }
    
    // console.log(capitalize("abcd"));
    // console.log(capitalize("ABCD"));
    // console.log(capitalize("aBcD"));

    // 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:

    // function lastLetter(str) {
    //   return str.at(-1);
    // }

    // console.log(lastLetter("abcd"));


// SOLVING FIZZBUZZ
// Writing the pseudocode. (Provided by TOP)
// 1. When a user inputs a number
// 2. Loop from 1 to the entered number
// 3. If the current number is divisible by 3 then print "Fizz"
// 4. If the current number is divisible by 5 then print "Buzz"
// 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6. Otherwise print the current number

    //  let answer = parseInt(
    //   prompt("Please enter the number you would like to FizzBuzz up to: "));

    //   for (let i = 1; i <= answer; i++) {
    //     if (i % 3 === 0  && i % 5 === 0) {
    //       console.log("FizzBuzz")
    //     } else if (i % 3 === 0) {
    //       console.log("Fizz");
    //     } else if (i % 5 === 0) {
    //       console.log("Buzz");
    //     } else {
    //       console.log(i)
    //     }
    //   }


// LOOPING CODE MDN

    // The for... of loop
    /*
      const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

      for (const cat of cats) {
      console.log(cat);
    }
    */

    // map() and filter()
    // map() creates a new collection containing the changed items.
    
    /*
      function toUpper(string) {
        return string.toUpperCase();
      }

      const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

      const upperCats = cats.map(toUpper);

      console.log(upperCats);
    */

    // filter() is used to test each item in a collection and create a new collection containing only matched items.

    /*
      function lCat(cat) {
        return cat.startsWith("L");
      }

      const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

      const filtered = cats.filter(lCat);

      console.log(filtered);


      // Written as a function expression.

      const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

      const filtered = cats.filter((cat) => cat.startsWith("L"));
      console.log(filtered);
    */

  // The standard for loop

    /* for (initializer; condition; final-expression) {
          // code to run
      }
    */
   // Example 
      // function calculate() {
      //   for (let i = 1; i < 10; i++) {
      //     const newResult = `${i} x ${i} = ${i * i}`;
      //     results.textContent += `${newResult}\n`;
      //   }
      //   results.textContent += "\nFinished!\n\n";
      // }
    

      // const cats = ["Pete", "Biggles", "Jasmine"];

      // let myFavoriteCats = "My cats are called ";

      // for (let i = 0; i < cats.length; i++) {
      //   if (i === cats.length - 1) {
      //     // We are at the end of the array
      //     myFavoriteCats += `and ${cats[i]}.`;
      //   } else {
      //     myFavoriteCats += `${cats[i]}, `;
      //   }
      // }

      // console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

  // Exiting loops with break
    // Example on MDN loops

  // Skipping iterations with continue
    // Example on website.

  // WHILE AND DO...WHILE loops

    // initializer variable
    // while (condition) {
       // code to run

    //   final-expression
    // }

  // ANOTHER LOOK AT THE CATS EXAMPLE USING WHILE
    // const cats = ["Pete", "Biggles", "Jasmine"];

    // let myFavoriteCats = "My cats are called ";

    // let i = 0;

    // while (i < cats.length) {
    //   if (i === cats.length - 1) {
    //     myFavoriteCats += `and ${cats[i]}.`;
    //   } else {
    //     myFavoriteCats += `${cats[i]}, `;
    //   }
    //   i++;
    // }

    // console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

  // THE DO...WHILE LOOP code inside is ALWAYS executed at least once
    // initializer
    // do {
       // code to run

    //   final-expression
    // } while (condition)

  // do...while example

    // const cats = ["Pete", "Biggles", "Jasmine"];

    // let myFavoriteCats = "My cats are called ";

    // let i = 0;

    // do {
    //   if (i === cats.length - 1) {
    //     myFavoriteCats += `and ${cats[i]}.`;
    //   } else {
    //     myFavoriteCats += `${cats[i]}, `;
    //   }
      
    //   i++;
    // } while (i < cats.length);

    // console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// IMPLEMENTING A LAUNCH COUNTDOWN Exercise on MDN

  // const output = document.querySelector(".output");
  // output.textContent = ""; // Provided by MDN

  // let i = 10;
  // while (i >= 0) {
  //   if (i === 10) {
  //     const para = document.createElement('p'); // Provided by MDN
  //     para.textContent = "Countdown 10"; // Provided by MDN
  //     output.appendChild(para); // Provided by MDN
  //   } else if (i === 0) {
  //     const para = document.createElement('p'); // Provided by MDN
  //     para.textContent = "BlastOff!";// Provided by MDN
  //     output.appendChild(para);// Provided by MDN
  //   } else {
  //     const para = document.createElement('p'); // Provided by MDN
  //     para.textContent = i; // Provided by MDN
  //     output.appendChild(para); // Provided by MDN
  //   }
  //   i--;
  // }

  // MDN Solution to launch countdown
  // let i = 10;
  // while (i >= 0) {
  //   const para = document.createElement('p');
  //   if (i === 10) {
  //     para.textContent = `Countdown ${i}`;
  //   } else if (i === 0) {
  //     para.textContent = "BlastOff!";
  //   } else {
  //     para.textContent = i;
  //   }
  //   output.appendChild(para);
  //   i--;
  // }

  // MDN loops exercise Filling in a guest list
  // My solution

  //   const people = [
  //   "Chris",
  //   "Anne",
  //   "Colin",
  //   "Terri",
  //   "Phil",
  //   "Lola",
  //   "Sam",
  //   "Kay",
  //   "Bruce",
  // ];

  //   const admitted = document.querySelector(".admitted");
  //   const refused = document.querySelector(".refused");
  //   admitted.textContent = "Admit: ";
  //   refused.textContent = "Refuse: ";

  //   // loop starts here
  //   for (const guest of people) {
  //     if (guest === "Phil" || guest === "Lola") {
  //       refused.textContent += guest + " ";
  //     } else {
  //       admitted.textContent += guest + " ";
  //     }
  //   }

  // MDN solution
    // for (const person of people) {
    //   if (person === "Phil" || person === "Lola") {
    //     refused.textContent += `${person}, `;
    //   } else {
    //     admitted.textContent += `${person}, `;
    //   }
    // }

    // refused.textContent = `${refused.textContent.slice(0, -2)}.`;
    // admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;


// Some examples of array magic *From The Odin Project loops and arrays*

    // function sumOfTripledEvens(array) {
        // let sum = 0;
        // for (let i = 0; i < array.length; i++) {
          
        // Step 1: If the element is an even number
            // if (array[i] % 2 == 0) {
              
            // Step 2: Multiply this number by three
              // const tripleEvenNumber = array[i] * 3;
              
            // Step 3: Add the new number to the total
            //   sum += tripleEvenNumber;
            //  }
          //  }
          //  return sum;
        // }

        // ** Callback as an argument another way of saying "I want you to pass
        // another function as an argument to my function".

        // *The map method map()*
        
        // function addOne(num) {
        //    return num + 1;
        // }
        // const arr = [1,2,3,4,5];
        // const mappedArr = arr.map(addOne);
        // console.log(mappedArr); // Outputs [2,3,4,5,6] returns new array
        // console.log(arr) // [1,2,3,4,5]
        
        //*** or ****
        
        // const arr = [1,2,3,4,5];
        // const mappedArr = arr.map((num) => num + 1);
        // console.log(mappedArr); // [2,3,4,5,6]

        // *The filter method filter()*

        // ** Similar to map by iterating over the array and applying the 
        // function, however it returns a new array where each item is only included IF the callback function returns true for it.

        // function isOdd(num) {
        //    return num % 2 !== 0; 
        // }
        // const arr = [1,2,3,4,5];
        // const oddNums = arr.filter(isOdd);
        // console.log(oddNums); // Output [1,3,5];
        // console.log(arr); // Output the original array
        // ** filter() expects the callback to return either true or false.

        // *The reduce method()*

        // ** reduce() expects a callback function however it takes two arguments
        // The first being the accumulator followed by current value (accumulator, current)
        
        // const arr = [1,2,3,4,5];
        // const productOfAllNums = arr.reduce((total, currentItem) => {
        //    return total * currentItem;
        // }, 1);
        // console.log(productOfAllNums); // Outputs 120;
        // console.log(arr); // Outputs // [1,2,3,4,5]

        // Rewritten sumOfTripledEvens(array)function
        // function sumOfTripledEvens(array) {
        //    return array
        //      .filter((num) => % 2 === 0)
        //      .map((num) => num * 3)
        //      .reduce((acc, curr) => acc + curr);
        // }

// ** The Odin Project Assignments Foundations loops and arrays **

  // Translate border-left-width to borderLeftWidth
      // function camelize(str) {
        // return str
          // .split("-")
          // .map((word, index) => index === 0 
          // ? word 
          // : word[0].toUpperCase() + word.slice(1)
        // )
        // .join("");
      // }
      // console.log(camelize("border-left-width"));

  // Filter range
      // function filterRange(arr, a, b) {
        // return arr.filter(item => (a <= item && item <= b));
      // }
      // let arr = [5, 3, 8, 1];
      // let filtered = filterRange(arr, 1, 4);
      // console.log(filtered);
      
  // Filter range "in place"
    //  function filterRangeInPlace(arr, a, b) {
    //   for (let i = 0; i < arr.length; i++) {
    //     let val = arr[i];

    //     // remove if outside of the interval
    //     if (val < a || val > b) {
    //       arr.splice(i, 1);
    //       i--;
    //     }
    //   }
    // }
    // let arr = [5, 3, 8, 1];
    // filterRangeInPlace(arr, 1, 4);
    // console.log(arr);
  // Sort in decreasing order
    // let arr = [5,2,1,-10,8];

    // arr.sort((a,b) => b - a);

    // console.log(arr);
  // Copy and sort array
      // function copySorted(arr) {
      //   return arr.slice().sort();
      // }
      // let arr = ["HTML", "JavaScript", "CSS"];
      // let sorted = copySorted(arr);
      // console.log(sorted);
      // console.log(arr);
  // Shuffle an array
      // function shuffle(array) {
      //   array.sort(() => Math.random() - 0.5);
      // }

      // let arr = [1,2,3];
    //  console.log(shuffle(arr));
    //  console.log(arr);

    // The better approach... Fisher-Yates shuffle:
      // function shuffle(array) {
      //   for (let i = array.length - 1; i > 0; i--) {
      //     const j = Math.floor(Math.random() * (i + 1));
      //     [array[i], array[j]] = [array[j], array[i]];
      //   }
      //   return array;
      // }
      // let array = [1,2,3];
      // console.log(shuffle(array));
  // Filter unique array members
      // function unique(arr) {
      //   let result = [];

      //   for (let str of arr) {
      //     if (!result.includes(str)) {
      //       result.push(str);
      //     }
      //   }
      //   return result;
      // }
      
      // let strings = ["Hare", "Krishna", "Hare", "Krishna",
      //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
      //   ];
      
      // console.log(unique(strings)); // Hare, Krishna, :-0


  
// --- JavaScript object basics ---

  // local copy of examples I followed along with MDN in oojs-mdn.html
  
    // Object basics
      // An object is a collection of related data and or functionality. Usually consisting of several variables and functions (properties and methods when inside objects).

      // Creating a object often begins with defining and initializing a variable

      // Object literal
        // const person = {
          //   name: ["Bob", "Smith"], // object property
          //   age: 32, // object property
          //   bio() { // object method (function inside object)
          //     console.log(
          //       `${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
          //   },
          //   introduceSelf() { // object method (function inside object)
          //     console.log(`Hi! I'm ${this.name[0]}.`);
          //   },
          // };
        
      // We've "literally" written out the object contents as we've come to create it.

      // It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, (sending a request to the server to be put into a database).


      // -- Dot notation --
        // The object name(person) acts as the namespace it must be entered first to access anything inside the object. Next the . then the item you want to access. person.age; person.bio();

      // -- Objects as object properties --
        // An object property can itself be an object. 
          // const person = {
          //   name: { object as object property
          //    first: "Bob",
          //    last: "Smith",
          //   },
          //   age: 32,
          //   bio() {
          //     console.log(
          // `${this.name.first} ${this.name.last} is ${this.age} years old.`)
          //   },
          //   introduceSelf() {
          //      console.log(`Hi! I'm ${this.name.first}.`);
          //    };
          // };

          // To access these items you need to chain the extra step onto the end with another dot. Also need to change the method code from name[0] to name.first or name.last
          // person.name.first -- "Bob"
          // person.name.last -- "Smith"

      // -- Bracket notation --
        // Provides an alternative way to access object properties instead of   dot notation 
      // Instead of person.age; or person.name.first;
        // you can do person["age"]; person["name"]["first"];

        // const user = {
        //   name: ["Bob", "Smith"],
        //   age: 32,
        // };

        // function logProperty(propertyName) {
        //   console.log(user[propertyName]);
        // }
        // logProperty("name"); // ["Bob", "Smith"]
        // logProperty("age"); // 32

      // -- Setting object members
        // We have been retrieving or (getting) object members, you can also set(update) the value of object members by declaring the member you want to set using dot or bracket notation.
          // person.age = 45;
          // person["name"]["last"] = "Cratchit";

          // const user = {
          //   name: ["Bob", "Smith"],
          //   age: 32,
          // };

          // function logProperty(propertyName) {
          //   console.log(user[propertyName]);
          // }
        
          // logProperty("name"); // ["Bob", "Smith"]
          // logProperty("age"); // 32
        
          // // updated the age and last name
          // user.age = 45;
          // user["name"][1] = "Cratchit";

          // logProperty("name"); // ["Bob", "Cratchit"]
          // logProperty("age"); // 45