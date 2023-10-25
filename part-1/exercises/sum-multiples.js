// get the multiples of 3 and 5 and find the sum of it within a limit
function sum(limit) {
    let value = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            value += i;
    }
    console.log(value);
}
sum(10)