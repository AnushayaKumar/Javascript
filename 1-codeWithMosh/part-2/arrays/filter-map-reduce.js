const array = [1, 2, 5, 73, 2, 6, 2, -1];

// filter()
// filtering and displaying on condition
console.log(array.filter(value => value > 10))

// map()
// map each element in an aray to something else

const map = array.map(value => '<li>' + value + '</li>')
console.log('<ul>' + map.join('') + '</ul>');

// appending into objects
console.log(array.map((value) => { return { values: value } }))
// or
console.log(array.map((value) => ({ values: value })))


// reduce(callback,initial value)
// return the calculations of all element into a single one.
// eg. sum of all elements in an array


// accumulator value is the calculation of the previous value
// in the begining its the frst value
console.log(array.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
// the initial value can be removed as it will take
// the accumulator value as initial which is the frst element value
console.log(array.reduce((accumulator, currentValue) => accumulator + currentValue))