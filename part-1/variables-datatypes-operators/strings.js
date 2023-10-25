// string build in methods
let strin = "Use these to make them";
console.log(strin.toUpperCase());
console.log(strin.toLowerCase());
// split = to array
// join = to string
console.log(strin.split(" ").join(" "));

console.log(strin.replace("these", "those"));

console.log(strin.indexOf("these"));
console.log(strin.includes("these"));

// difference between slice and substring

// 1.larger to smaller doesn't work in slice but works in substring
// ""
console.log(strin.slice(8, 3));
// " thes"
console.log(strin.substring(8, 3));

// 2.negative doesn't work in substring but works in slice
// "the"
console.log(strin.slice(-5, -1));
// ""
console.log(strin.substring(-5, -1));




