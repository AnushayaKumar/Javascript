// assigning default values to the parameter if the values are not given in the argument

// the values after a default assigned parameter should
// always have default parameters as it will create a confusion
function interest(principal, rate = 100, year = 4) {
    return principal * rate / 100 * year;
}

console.log(interest(500, 100))