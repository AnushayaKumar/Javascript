const first = [1, 2, 3, 5];
const second = [10, 20, 30, 40];

// making shallow copy
// 1
// concat
const combine = first.concat(second);

// 2
// slicing to get from a part
const slice3 = first.slice(); //with no start and end
const slice2 = first.slice(2); //with start
const slice1 = first.slice(2, 3); //with start and end

console.log(combine);

// 3
// also using spread operator (introduced in ES6)
const spread = [...first, ...second] //returns [ 1,2,3,5,10, 20, 30, 40 ]
const spreadCopy = [...first] //returns the copy of first array [1,2,3,5]
first[4] = 10;
console.log(spreadCopy);
console.log(first);




