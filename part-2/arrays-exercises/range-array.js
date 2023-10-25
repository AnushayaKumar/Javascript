// creating an array from minimum value to maximum value
let arrayFromRange = (min, max) => {
    let array = [];
    while (min <= max) {
        array.push(min++);
        min++;
    }
    return array;
}
console.log(arrayFromRange(10, 100));
console.log(arrayFromRange(10, -10));


let arrayRange2 = (min, max) => {
    const array1 = []
    for (let i = min; i <= max; i++)
        array1.push(i);
    return array1;
}
console.log(arrayRange2(10, 100));
console.log(arrayRange2(-10, 10));