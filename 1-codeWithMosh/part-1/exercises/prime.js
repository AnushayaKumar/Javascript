// list of prime number until the limit value
function prime(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime()) console.log(i);
    }
}
prime(100)


// check if the given number is prime or not
function isPrime(number) {
    for (let j = 2; j < number; j++)
        if (number % j === 0) return false;
    return true;
}
// console.log(isPrime(7));