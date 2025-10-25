// Below are tasks found on the website javascript.info part of TOP curriculum.

// WORKING WITH VARIABLES
// 1. Declare two variables: admin and name.
// let admin;
// let name;
// 2. Assign the value "John" to name.
// name3 = "John";
// 3. Copy the value from name to admin.
// admin = name3;
// 4. Show the value of admin using alert (must output “John”).

// alert(admin);

// GIVING THE RIGHT NAME
//  1. Create a variable with the name of our planet. How would you name such a variable?
// let homePlanet = "Earth";
//  2.Create a variable to store the name of a current visitor to a website. How would you name that variable?
// let currentUser = "John";

// OPERATOR TASKS

// The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?
    // let a = 1, b = 1;

    // let c = ++a; // 2 prefix returns new value
    // let d = b++; // 1 postfix returns old value

//What are the values of a and x after the code below?

// let a = 2;

// let x = 1 + (a *= 2);
//     a = 4;
//     x = 5;

// // What are results of these expressions?
    
//     "" + 1 + 0 // "10"
//     "" - 1 + 0 // -1
//     true + false // 1
//     6 / "3" // 2
//     "2" * "3" // 6
//     4 + 5 + "px" // "9px"
//     "$" + 4 + 5 // "$45"
//     "4" - 2 // 2
//     "4px" - 2 // NaN
//     "  -9  " + 5 // "  -9  5"
//     "  -9  " - 5 // -14
//     null + 1 // 1
//     undefined + 1 // Nan
//     " \t \n" - 2 // -2

// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

    // let a = prompt("First number?", 1);
    // let b = prompt("Second number?", 2);

    // alert(a + b); // 12

    // let a1 = prompt("First number?", 1);
    // let b2 = prompt("Second number?", 2);

    //console.log(+a1 + +b2);

// Data types task

    // What is output of the script?

    // let name2 = "Ilya";

    // alert( `hello ${1}` ); // hello 1

    // alert( `hello ${"name"}` ); // hello name

    // alert( `hello ${name2}` ); // ? hello Ilya

// Comparisons

    //What will be the result for these expressions?

    // 5 > 4 // true

    // "apple" > "pineapple" // false

    // "2" > "12" // true

    // undefined == null // true

    // undefined === null // false

    // null == "\n0\n" // false

    // null === +"\n0\n" // false

// Logical operators

    // Whats the result of OR?

    // alert( null || 2 || undefined ); // 2

    // What's the result of OR'ed alerts?

    // alert( alert(1) || 2 || alert(3) ); // 1, 2

    // What is the result of AND?
    
    // alert( 1 && null && 2 ); // null

    // What is the result of AND'ed alerts?

    // alert( alert(1) && alert(2) ); // 1 then undefined

    // THe result of OR AND OR

    // alert( null || 2 && 3 || 4 ); // 3

    
    // Check the range between

    /* Write an if condition to check that age is between 14 and 90 inclusively.
    “Inclusively” means that age can reach the edges 14 or 90.*/
    
    // let age = 90;

    // if (age >= 14 && age <= 90) {
    //     // alert(`Your ${age} years old!`);
    // }

    // Check the range outside

    // Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.

    // if (age < 14 || age > 90);

    // if (!(age >= 14 && age <= 90));

    // A question about "if"

    // Which of these alerts are going to execute?
    // What will the results of the expressions be inside if(...)?

    // if (-1 || 0) alert( 'first' ); // Runs, -1 truthy
    // if (-1 && 0) alert( 'second' ); // Doesn't run
    // if (null || -1 && 1) alert( 'third' ); //  runs, 1


    // Check the login

     /* Write the code which asks for a login with prompt.

     If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”
     The password is checked as follows
     If it equals “TheMaster”, then show “Welcome!”,
     Another string – show “Wrong password”,
     For an empty string or cancelled input, show “Canceled"*/

    // let userName = // prompt("Who's there?");
    
    
    
    // if (userName === "Admin") {
    //     let pass = // prompt("Password?");

    //     if (pass === "TheMaster") {
    //         // alert("Welcome!");
    //     } else if (pass === "" || pass === null) {
    //        // alert("Canceled");
    //     } else {
    //         // alert("Wrong password");
    //     }
    
    // }   else if (userName === "" || userName === null) {
    //     // alert("Canceled");
    // }   else {
    //     // alert( "I don't know you");
    // }

// Conditional branching: if, "?"

    // Will alert be shown?
        // if ("0") {
        //   // alert( 'Hello' );
        // } // Yes Any string except an empty one becomes true
        
    // The name of JavaScript

    //Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
        
    // If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
        
    // let officialName = // prompt("What is the official Java script name?", "");

        // if (officialName === "ECMAScript") {
        //     // alert("Right!");
        // } else {
        //     // alert("You don't know? ECMAScript!");
        // }

    // Show the sign

        // Using if..else, write the code which gets a number via prompt and then shows in alert:

        // 1, if the value is greater than zero,
        // -1, if less than zero,
        // 0, if equals zero.

    // let num = Number(prompt("Enter a number", ""));

        // if (num > 0) {
        //     alert(1);
        // } else if (num < 0) {
        //     alert(-1);
        // } else {
        //     alert(0);
        // }

    // Rewrite this if using the conditional operator "?"

        // let result = (a + b < 4) ? "below" : "Over";

    // Rewrite if...else using multiple ternary operators "?"
    
        // let message = (login == "Employee") ? "Hello" : 
        //     (login == "Director") ? "Greetings" :
        //     (login == "") ? "No login" : 
        //     "";
        

// The switch Statement

    //Rewrite the "switch" into an "if"

    /*switch (browser) {
        case 'Edge':
            alert( "You've got the Edge!" );
            break;

        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert( 'Okay we support these browsers too' );
            break;

        default:
            alert( 'We hope that this page looks ok!' );
    }*/

    // let browser = prompt("Enter a browser.");

    // if (browser === "Edge") {
    //     alert("You've got the Edge!");
    // } else if (browser === "Chrome" 
    //     || browser === "Firefox" 
    //     || browser === "Safari" 
    //     || browser === "Opera") {
    //         alert("Okay we support these browsers too" );
    //     } else {
    //         alert("We hope that this page looks ok!" );
    //     }


    //Rewrite "if" into "switch"

        /*let a = +prompt('a?', '');

        if (a == 0) {
            alert( 0 );
        }
        if (a == 1) {
            alert( 1 );
        }

        if (a == 2 || a == 3) {
            alert( '2,3' );
        }*/

        // let a = +prompt("a?", "");

        // switch (a) {
        //     case 0:
        //         alert(0);
        //         break;
        //     case 1:
        //         alert(1);
        //         break;
        //     case 2:
        //     case 3:
        //         alert("2,3");
        //         break;
        // }


// Functions
    // Rewrite the function using "?" or "||"
        /*function checkAge(age) {
            if (age > 18) {
                return true;
            } else {
                return confirm('Did parents allow you?');
            }
        }*/

        // function checkAge(age) {
        //     return (age > 18) ? true : confirm("Did parents allow you?");
        // }

        // function checkAge(age) {
        //     return (age > 18) || confirm("Did parents allow you?");
        // }

    // Write a function min(a,b) which returns the least of two numbers a and b.

    // For instance:

        // min(2, 5) == 2
        // min(3, -1) == -1
        // min(1, 1) == 1

        // function min(a, b) {
        //     if (a < b) {
        //         return a;
        //     } else {
        //         return b;
        //     }
        // }
        // console.log(min(2, 5));
        // console.log(min(3, -1));
        // console.log(min(1,1));
        
// Arrow function basics
    // Rewrite with arrow functions
    
    /* function ask(question, yes, no) {
            if (confirm(question)) yes();
            else no();
        }
        
        ask(
        "Do you agree?",
        function() {alert("You agreed.");},
        function() {alert("You canceled the execution.");}
        );
    */


        // function ask(question, yes, no) {
        //     if (confirm(question)) yes();
        //     else no();
        // }

        // ask(
        //     "Do you agree?", 
        //     () => alert("You canceled the execution."),
        //     () => alert("You agreed.")
        // );
        
// Loops Javascript.info
    
    // The "while" loop
    
    // let i = 0;
    // while (i < 3) { //shows 0, then 1, then 2
    //     alert(i);
    //     i++;
    // }
    
    // The "do... while" loop
    
    // let i = 0;
    //  do {
    //     alert(i);
    //     i++;
    //   } while (i < 3); // Used when you want the body of the loop to execute at least once.

    // The "for" loop

    // for (let i = 0; i < 3; i++) {
    //     alert(i); // Shows 0, then 1, then 2
    // }

    // Breaking the loop

        // let sum = 0;

        // while (true) {
        //     let value = +prompt("Enter a number", "");
            
        //     if (!value) break;

        //     sum += value

        // }
        // alert("Sum: " + sum );

    // Continue to the next iteration

        // for (let i = 0; i < 10; i++) {
        //     // if true, skip the remaining part of the body
        //     if (i % 2 == 0) continue;

        //     alert(i); // outputs odd numbers before reaching 10
        // }

    // Labels for break/continue

        // outer: for (let i = 0; i < 3; i++) {
        //     for (let j = 0; j < 3; j++) {
        //         let input = prompt(`Value at coords (${i}, ${j})`, "");

        //         // if an empty string or canceled, then break out of both loops
        //         if (!input) break outer;
        //     }
        // }

    // Loops tasks

        // Last loop value
            // What is the last value alerted by this code? Why?

            // let i = 3;

            // while (i) {
            // alert( i-- );
            // } // The last value is 1 because 0 will be the first falsy value.

        // Which values does the "while" loop show?
            // For every loop iteration, write down which value it outputs and then compare it with the solution.

            // Both loops alert the same values, or not?

            // 1. The prefix form ++i:

            //     let i = 0;
            //     while (++i < 5) alert( i ); // alerts 1, 2, 3, 4
                
            // 2. The postfix form i++

            //      let i = 0;
            //      while (i++ < 5) alert( i ); // alerts 1, 2, 3, 4, 5

        // Which values get shown by the "for" loop?
            // For each loop write down which values it is going to show. Then compare with the answer.

            // Both loops alert same values or not?

            // 1. The postfix form:
                // for (let i = 0; i < 5; i++) alert(i); alerts 0, 1, 2, 3, 4

            // 2. The prefix form;
                // for (let i = 0; i < 5; ++i) alert(i); alerts 0, 1, 2, 3, 4

        // Output even numbers in the loop
            // Use the for loop to output even numbers from 2 to 10.
            
            // for (let i = 2; i <= 10; i++) {
            //     if (i % 2 == 0) {
            //         alert(i);
            //     }
            // }

        // Replace "for" with "while"
            // for (let i = 0; i < 3; i++) {
            //  alert( `number ${i}!` );
            // }

            // let i = 0;
            // while (i < 3) {
            //     alert(`number ${i}!` );
            //     i++;
            // }

        // Repeat until the input is correct
            // Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

            // The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

            // Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

            //  let num;
            //  do {
            //    num = +prompt("Enter a number above 100", "0");
            //  } while (num <= 100 && num); 
         
            // The check && num is false when num is null or an empty string then the while loop stops.
        
        // Output prime numbers
            //An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

            // In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

            // For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

            // Write the code which outputs prime numbers in the interval from 2 to n.

            // For n = 10 the result will be 2,3,5,7.

            // P.S. The code should work for any n, not be hard-tuned for any fixed value.

            // Solution from javascript.info
                // let n = +prompt("Enter a number");

                // nextPrime:
                // for (let i = 2; i <= n; i++) { // for each i...
                    
                //     for (let j = 2; j < i; j++) { // look for a divisor..
                //        if (i % j == 0) continue nextPrime; // not a prime -->
                //     }
                //     console.log(i); // a prime
                // }
        
// Notes on arrays javascript.info

    // array syntax
    // let arr = ["a", "b", "c"];
    // to use an element console.log(arr[0]) // A
    // replace a element arr[0] = "1" // [1, "b", "c"]
    // add a new element arr[3] = "d" // now [1, "b", "c", "d"]
    // find the length of the array console.log(arr.length)
    // show the whole array console.log(arr)
    // arrays can store elements of any type
    // Get the last element with .at console.log(arr.at(-1))
    // a queue is one of the most common uses of an array
    // it is a ordered collection of elements that support two operations
    // push and shift.
    // shift = get an element from the beginning, advancing the queue so the   2nd element becomes the 1st
    // push appends an element to the end.
    // another use case would be a data structure named stack
    // also supports two operations, push and pop
    // push adds an element to the end, pop takes an element from the end.
    // For stacks the latest pushed item is received first. (last in first out)
    // For queues we use (first in first out)
    // pop extracts the last element of the array and returns it
    // console.log(arr.pop() ) removes "d" pop will modify the array 
    // console.log(arr.push("d")) adds the "d" back to the end
    // shift extracts the first element of the array and returns it
    // console.log(arr.shift()) removes "1"
    // console.log(arr.unshift("1")) adds "1" back to the beginning
    // Looping through arrays
    //  let arr = ["Apple", "orange", "Pear"];
    //  for (let i = 0; i < arr.length; i++) {
    //        console.log(arr[i])
    //      }
    // For arrays there is the for.. of loop
    //  let fruits = ["Apple", "Orange", "Pear"];
    //  for (let fruit of fruits) {
    //      console.log(fruit);
    //  }
    // simplest way to clear an array is with length arr.length = 0;
    // Multidimensional arrays. Arrays within arrays
    // let matrix = [
    //     [1, 2, 3]
    //     [4, 5, 6]
    //     [7, 8, 9]
    //   ];
    // console.log(matrix[0][1]); // 2 the second value in the first array
    // Arrays implementation of toString 
    //  let arr = [1, 2, 3];
    //  console.log(String(arr) === "1,2,3"); true
    
    // Array methods
    // splice can insert, remove and replace elements from arrays
    // console.log(splice(start[, deleteCount, elem1, ..., elemN]));
    // start: removes deleteCount elements and then inserts elem1, ..., elemN at their place.
    // let arr = ["I", "study", "JavaScript"];
    // console.log(arr.splice(1, 1)); // From index 1 remove 1 element
    // console.log(arr); // ["I", "Javascript"];
    // Next we remove 3 elements and replace them with the other two
    //  let arr = ["I", "study", "JavaScript", "right", "now"];
    //  arr.splice(0, 3, "Let's", "dance");
    //  console.log(arr); // ["Let's", "dance", "right", "now"]
    // let arr = ["I", "study", "JavaScript", "right", "now"];
    // let removed = arr.splice(0, 2);
    // console.log(removed); // ["I", "study"] <-- array of removed elements
    // splice can also insert the elements without any removals.
    // let arr = ["I", "study", "JavaScript"];
    // from index 2, delete 0, insert "complex", "language"
    // arr.splice(2, 0, "complex", "language")
    // console.log(arr); // ["I", "study", "complex", "language", "JavaScript"]
    // negative indexes allowed let arr = [1, 2, 5];
    // from index -1 (one step from the end) // delete 0 elements insert 3, 4
    // arr.splice(-1, 0, 3, 4) console.log(arr); // [1,2,3,4,5]

    // slice syntax arr.slice([start], [end]);
    // returns a new array copying all items from index start to end
    // similar to string.slice instead makes sub arrays.
    // let arr = ["t", "e", "s", "t"];
    // console.log(arr.slice(1,3)) // e,s does not include the end
    // console.log(arr.slice(-2)); // s,t copy from -2 till the end
    // can call it without args arr.slice() creates a copy of arr

    // concat creates a new array that includes values from other arrays and additional items
    // arr.concat(arg1, arg2...) accepts any number of args arrays or values
    // let arr = [1,2];
    // console.log(arr.concat([3,4])); // 1,2,3,4
    // console.log(arr.concat([3,4], [5,6])); // 1,2,3,4,5,6

    // iterate: forEach method allows to run a function for every element
    // arr.forEach(function(item, index, array) {
    //      ... do something with an item
    //    });
    // ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
    
    // ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    //   alert(`${item} is at index ${index} in ${array}`);
    //  });

    // Searching in array indexOf/lastIndexOf and includes
    // arr.indexOf(item, from) looks for item starting from and returns where it was found else -1
    // arr.includes(item, from) looks for item starting from, returns true if found. Usually these methods are used with only one argument the item to search by default search is from the beginning.
    // let arr = [1,0, false];
    // console.log(arr.indexOf(0)); // 1 console.log(arr.indexOf(false)) // 2
    // console.log(arr.indexOf(null)) // -1 console.log(arr.includes(1)); // true
    // indexOf uses strict equality ===
    // arr.includes is preferred if we want to check if the item exists in the array and don't need the index.
    // arr.lastIndexOf same as indexOf but looks for from right to left
    // finding an object with a specific condition from an array
    
    // let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
    // });
    // item is the element index is the index array is the array itself
    // let users = [
    //  {id: 1, name: "John"},
    //  {id: 2, name: "Pete"},
    //  {id: 3, name: "Mary"}
    //  ];
    //  let user = users.find(item => item.id == 1);
    // console.log(user.name); // John
    // arr.findIndex is same syntax but returns the index -1 returned if nothing found
    // arr.findLastIndex searches from right to left

    // filter used when finding many elements. syntax similar to find but returns an array of all matching elements.

    // Transform an array
    // arr.map one of the most useful. it calls the function for each element of the array and returns the array of results.
    // let result = arr.map(function(item, index, array) {
    //  returns the new value instead of item
    //  });
    // let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
    // console.log(lengths); // 5,6,7
    // sort arr.sort() sorts the array in place, changing its element order.
    // let arr = [1 , 2, 15];
    // arr.sort();
    // arr.reverse(); does what is says
    
    // split and join 
    // str.split(delim) method splits the string into an array by the given delimiter(delim)
    // let names = "Bilbo", Gandalf, Nazgul";
    // let arr = names.split(", ");
    // for (let name of arr) {
    //    alert( `A message to ${name}.`). // A message to Bilbo (and others)
    // } split has a second optional numeric argument. a limit on array length
    // If provided the extra elements are ignored
    // The call to split(s) with an empty s(" ") would split the string into an array of letters:
    // let str = "test";
    // alert(str.split("")); // t,e,s,t

    // arr.join(glue) does the reverse to split. Will creates a string of arr items joined by glue between them
    // let arr = ["Bilbo", "Gandalf", "Nazgul"];
    // let str = arr.join(";"); // glue the array into a string using ;
    // alert(str); // Bilbo;Gandalf;Nazgul