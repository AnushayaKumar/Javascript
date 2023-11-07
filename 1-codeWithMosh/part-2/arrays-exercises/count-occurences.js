let array = [1, 2, 3, 5, 7, 2, 1, 4, 1, 3, 56, 2, 1, 3, 6, 1];

let countOccurences = (array, element) => {
    // let count = 0;
    // for (let i of array) {
    //     if (i !== element)
    //         return "invalid number";
    //     if (i === element)
    //         count++;
    // }
    // return count


    // initial value of accumulator is 0 as assigned or it takes the frst value of array.
    // current value is the current iteration value.
    // accumulator stores the previos iterations value.
    return array.reduce((accumulator, current) => {
        let count = element === current ? 1 : 0;
        return accumulator + count;
    }, 0)
}

console.log(countOccurences(array, 2))