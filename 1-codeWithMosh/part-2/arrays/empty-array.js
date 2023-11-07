// memory references
let arr = [1, 2, 3, 4];
let numbers = arr;
arr[4] = 100;
// [1,2,3,4,100]
console.log(numbers);

// empty array
// now we're pointing numbers to empty array,which will not reflect in the original array.
// solution1
// numbers = []
// console.log(numbers);
// console.log(arr);


// solution2
// numbers.length = 0;

// solution3
// numbers.splice(0, numbers.length);

// solution4
// while(number.length>0){
// numbers.pop();
// }

