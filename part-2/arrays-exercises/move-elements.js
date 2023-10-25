let array = [1, 2, 3, 45, 6, 8, 9];

// move an element and place it in an other index.
let move = (array, indexToAdd, elementToMove) => {
    // elements should be present and 
    if (!(array.includes(elementToMove)) || indexToAdd >= array.length || indexToAdd < 0) return console.error("Invalid number")

    let index = array.indexOf(elementToMove);
    array.splice(index, 1);
    array.splice(indexToAdd, 0, elementToMove);
    return array;
}

console.log(move(array, -1, 1))
console.log(move(array, 6, 45))
console.log(move(array, 4, 45))
console.log(move(array, 4, 450))
console.log(move(array, 7, 45))

