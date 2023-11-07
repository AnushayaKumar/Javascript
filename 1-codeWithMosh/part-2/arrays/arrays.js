const number = [10, 20, 30];

// adding at the end
number.push(2, 3);

// adding at the beginning
number.unshift(5, 10);

// adding in the middle
// (index,delete-count,add elements)
number.splice(2, 0, "a", 5);
console.log(number);

// removing an element 
// removes last element
number.pop();

// removes at beginning
number.shift();

// removes at middle
// from index 1 remove 1
number.splice(1, 1);


const array1 = [5, 12, 8, 130, 44];

// returns frst found value
const found = array1.find((element) => element > 10);
// returns all filtered value
const found1 = array1.filter((element) => element > 10);

console.log(found);// 12
console.log(found1);//12,130,44

// finding elements for primitives
// if the element is present returns index or -1.
// this finds only the frst appearance of the index
console.log(number.indexOf(10))

// you can also give a starting position from where the search should
console.log(number.indexOf(10, 3))

// you can also search the lastIndex
console.log(number.lastIndexOf(10))

// return boolean of search using includes
console.log(number.includes(10))


// finding elements objects
// objects are checked by their references not their properties
const courses = [
    { id: 1, name: "a" },
    { id: 2, name: "b" }
]

// finds and returns the object
// if false returns undefined
const course = courses.find(function (course) {
    return course.name === "a";
})
console.log(course);

// using arrow functions
// single parameter then no need of brackets,
// if returns something you can remove the return keyword
const course2 = courses.find(course => course.name === "a")
console.log(course2);

// finds the index
// if not returns -1
const course1 = courses.findIndex(function (course) {
    return course.name === "a";
})
console.log(course1);

