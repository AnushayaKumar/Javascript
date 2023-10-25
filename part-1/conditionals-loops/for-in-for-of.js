// for-in
// primarily used to iterate over the properties of an object or an array.
// In object its through the properties
// In array its through the indexes.

// in an object
let person = {
    name: "Anushaya",
    age: 22,
    dob: "20 - 12 - 2000",
}

for (let key in person) {
    console.log(person[key]);
}


// in an array
let subjects = ['english', 'maths', 'physics', 'geography'];

for (let index in subjects) {
    console.log(subjects[index]);
}


// for-of
// this was introduced in ES6 especially to iterate over arrays.
// where as objects are not iterable

// in arrays
for (let subject of subjects) {
    console.log(subject);
}


// accessing keys using (for of) & object constructor function
for (let key of Object.keys(subject)) {
    console.log(key)
}

// gives each entry in array as [key:value]
for (let entries of Object.entries(subject)) {
    console.log(entries)
}
