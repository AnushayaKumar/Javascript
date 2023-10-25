let array = [1, 2, 3, 5, 7, 2, 1, 4, 1, 3, 56, 2, 1, 3, 6, 1];
try {
    const count = countOccurences(array, 2)
    console.log(count)
}
catch (e) { console.log(e) }

function countOccurences(array, element) {
    // initial value of accumulator is 0 as assigned or it takes the frst value of array.
    // current value is the current iteration value.
    // accumulator stores the previos iterations value.
    if (!Array.isArray(array))
        throw new Error("this is not an array")
    return array.reduce((accumulator, current) => {
        let count = element === current ? 1 : 0;
        return accumulator + count;
    }, 0)
}
