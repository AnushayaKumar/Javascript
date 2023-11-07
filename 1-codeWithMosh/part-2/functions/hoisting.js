// hoisting is a technique in which function declarations
// are pushed to the top of the document automatically.


// so if you call the function before the
// declaration it will execute as it is hoisted. 
walk()

// function declaration
function walk() {
    console.log("walk");
}

// but this cannot be done in place of expression
// it will return an error.
// run()

// function expression with anoynomous function
let run = function () {
    console.log("run");
}

// after the expression declaration only it works
run()

