    // Below are tasks found on the website javascript.info part of TOP curriculum.
    
    // WORKING WITH VARIABLES
    // 1. Declare two variables: admin and name.
    let admin;
    let name;
    // 2. Assign the value "John" to name.
    name = "John";
    // 3. Copy the value from name to admin.
    admin = name;
    // 4. Show the value of admin using alert (must output “John”).
    alert(admin);

    // GIVING THE RIGHT NAME
    // 1. Create a variable with the name of our planet. How would you name such a variable?
    let homePlanet = "Earth";
    // 2.Create a variable to store the name of a current visitor to a website. How would you name that variable?
    let currentUser = "John";

    // OPERATOR TASKS
    
    // The postfix and prefix forms
    // What are the final values of all variables a, b, c and d after the code below?
        // let a = 1, b = 1;

        // let c = ++a; // 2 prefix returns new value
        // let d = b++; // 1 postfix returns old value

    //What are the values of a and x after the code below?

    // let a = 2;

    // let x = 1 + (a *= 2);
        a = 4;
        x = 5;

    // What are results of these expressions?
        // "" + 1 + 0 // "10"
        // "" - 1 + 0 // -1
        // true + false // 1
        // 6 / "3" // 2
        // "2" * "3" // 6
        // 4 + 5 + "px" "9px"
        // "$" + 4 + 5 "$45"
        // "4" - 2 // 2
        // "4px" - 2 // NaN
        // "  -9  " + 5 // "  -9  5"
        // "  -9  " - 5 // -14
        // null + 1 // 1
        // undefined + 1 // Nan
        // " \t \n" - 2 // -2

    // Here’s a code that asks the user for two numbers and shows their sum.

    // It works incorrectly. The output in the example below is 12 (for default prompt values).

    // Why? Fix it. The result should be 3.

        // let a = prompt("First number?", 1);
        // let b = prompt("Second number?", 2);

        // alert(a + b); // 12

        let a1 = prompt("First number?", 1);
        let b2 = prompt("Second number?", 2);

        console.log(+a1 + +b2);

    // Data types task

        // What is output of the script?

        let name2 = "Ilya";

        alert( `hello ${1}` ); // hello 1

        alert( `hello ${"name"}` ); // hello name

        alert( `hello ${name2}` ); // ? hello Ilya
    
    // Comparisons

        //What will be the result for these expressions?

        5 > 4 // true

        "apple" > "pineapple" // false

        "2" > "12" // true

        undefined == null // true

        undefined === null // false

        null == "\n0\n" // false

        null === +"\n0\n" // false

