let array = [1, 2, 4, 7, 2, 1, 5, 7, 6, 2];

let excludeArray = (array, exclude) => {
    let output = []
    for (let element of array)
        if (!exclude.includes(element))
            output.push(element)
    return output
}

console.log(excludeArray(array, [1, 2, 4]))



// let excludeArray = (array, exclude) => {
//     for (i = 0; i < exclude.length; i++)
//         for (j = 0; j < array.length; j++)
//             if (exclude[i] === array[j])
//                 array.splice(j, 1);
//     return array;
// }
// console.log(excludeArray(array, [1, 2, 4]))