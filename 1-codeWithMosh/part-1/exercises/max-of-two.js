// find the max of two numbers
function max(one, two) {
    // 1
    return one > two ? one : two;

    // 2
    // if (one > two) return one;
    // return two;

    // 3
    // if (one > two) {
    //     console.log("one is greater", one);
    // }
    // else if (two > one) {
    //     console.log("two is greater", two);
    // }
    // else if (one === two) {
    //     console.log("both are equal");
    // }
    // else {
    //     console.log("enter a valid number");
    // }
}

console.log(max(3, 5));
console.log(max(7, 5));
console.log(max(5, 5));
// takes the alphabetically greater one
console.log(max('anu', 'achu'));
// null
console.log(max(undefined, null));
// NAN
console.log(max(undefined, NaN));
// NAN
console.log(max(null, NaN));

