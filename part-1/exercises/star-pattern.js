// function star(row) {
//     let star = "";
//     for (let i = 0; i < row; i++) {
//         star += "*";
//         console.log(star);
//     }
// }
// star(10)


function star(row) {
    for (let i = 0; i < row; i++) {
        let star = "";
        for (let j = 0; j < i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
star(10)
