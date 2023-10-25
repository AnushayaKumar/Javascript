// reversing an array
const array = [1, 2, 3, 4, 5, 7, 6];
// 1
// console.log(array.reverse());


// 2
const arr1 = []
for (let i = array.length - 1; i >= 0; i--)
    arr1.push(array[i])
console.log(arr1)
