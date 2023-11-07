// divisible be 3 then "fizz"
// divisible by 5 then "buzz"
// divisible by both "fizzbuzz"
function fizzbuzz(number) {
    if (typeof number !== 'number') {
        return NaN;
    }
    else if ((number % 3 == 0) && (number % 5 === 0)) {
        return "fizzbuzz"
    }
    else if (number % 3 === 0) {
        return "fizz"
    }
    else if (number % 5 === 0) {
        return "buzz"
    }
    else {
        return number;
    }
}
console.log(fizzbuzz(15));
console.log(fizzbuzz(3));
console.log(fizzbuzz(45));
console.log(fizzbuzz("anu"));
console.log(fizzbuzz(100));
console.log(fizzbuzz(7));