let array = [2, 4, 2, 5, 3, 52, 52, 54, 9]
// sort array
array.sort((a, b) => a - b)
// 1
// find max
console.log(array[array.length - 1]);

// 2
// return max
console.log(array.reduce((accumulator, current) => accumulator > current ? accumulator : current))