const array = [1, 2, 4, 6, 7, 8];
const includesElement = (array, element) => {
    for (let i in array)
        if (array[i] === element) return true;
    return false;
}
console.log(includesElement(array, 3));
console.log(includesElement(array, 2));