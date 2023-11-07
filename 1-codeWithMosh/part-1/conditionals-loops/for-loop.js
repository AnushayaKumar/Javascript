//pattern printing using for loop
let word = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // if (i <= j) {
        // if (i == j) {
        // if (i >= j) {
        // if ((i == j) || (j == 5 - 1 - i)) {
        if ((i == 0) || (i == 4) || (j == 0) || (j == 4)) {
            word += "*";
        }
        else {
            word += " ";
        }
    }
    word += "\n";
}
console.log(word);