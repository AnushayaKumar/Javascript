// rest operator is used in function definition
// it is similar to spread operator

// no elements should be defined after rest
function exampleRest(value, ...args) {
    console.log(value)
    // args logs in as array
    console.log(args);
}

// 'anu' goes into value
// rest elements go into args
exampleRest('anu', 1, 2, 3, 5, 78)
