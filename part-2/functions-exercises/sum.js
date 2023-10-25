// the rest operator will return an array.
function sum(...args) {
    if (args.length === 1 && Array.isArray(args[0])) {
        args = args[0];
    }
    let sum = 0;
    for (let element of args) {
        sum += element;
    }
    console.log(sum)

    // using reduce
    const value = args.reduce((accumulator, current) => {
        return accumulator + current;
    })
    console.log(value)
}
sum(1, 2, 3, 4, 5, 6)
// if i pass an array that should be converted and returned
sum([2, 4, 6, 3, 2])