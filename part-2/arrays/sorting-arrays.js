const array = [9, 4, 2, 7, 3, 2];
const array1 = [
    { id: 1, language: "english" },
    { id: 2, language: "bengali" },
]

// sorting arrays
//ascending
// returns 100,2,4,55,6,77
console.log(array.sort());

// returns exact sorting result
console.log(array.sort((a, b) => a - b))

// descending
console.log(array.reverse());

// returns exact sorting result
console.log(array.sort((a, b) => a - b))

// sorting array of objects
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

// sort by value
// ascending
console.log(items.sort((a, b) => a.value - b.value))

// descending
console.log(items.sort((b, a) => a.value - b.value))


// sort by name
// ascending
console.log(items.sort((a, b) => {
    const A = a.name.toUpperCase();
    const B = b.name.toUpperCase();
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
}))

// descending
console.log(items.sort((b, a) => {
    const A = a.name.toUpperCase();
    const B = b.name.toUpperCase();
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
}))

