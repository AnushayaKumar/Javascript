let subject = {
    teacher: "Aashiya",
    maxMarks: 100,
    calculate() {
        console.log("calculate");
    }
}

// method 1
const another = Object.assign({}, subject);
console.log(another);
// method 2
// object spread operator
const anotherTwo = { ...subject };
console.log(anotherTwo);

// method 3
const anotherThree = {}
for (let key in subject) {
    anotherThree[key] = subject[key];
}
console.log(anotherThree);


// changes made in subject will not reflect in other three
subject.teacher = "anu";
console.log(another);
console.log(anotherTwo);
console.log(anotherThree);


// Garbage collector.
// it will automatically allocate and deallocate the memory.
// there is no need for you to think and work on it.
let max = 100;