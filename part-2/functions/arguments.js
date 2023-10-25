// The arguments object in JavaScript is not an array,
// although it behaves somewhat like one
// The arguments object has a length property,
// it does not have array - specific methods like push, pop


// no parameter is required in definition
function sum() {
    let total = 0;
    console.log(arguments)
    for (let value of arguments) {
        total += value
    }
    return total;
}

// arguments in calling function can be of any length
// the arguments are an object here 
console.log(sum(1, 4, 4, 2, 5, 7, 9, 3))

