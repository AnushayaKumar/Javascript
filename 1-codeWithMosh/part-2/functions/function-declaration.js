// function declaration
function walk() {
    console.log("walk");
}

// function expression with anoynomous function
let run = function () {
    console.log("run");
}
// assigning the expression run to another expression.
let jump = run;
jump()

