// If max speed exceeds 70 add a point for every 5 kms
// if points more than 12 then suspend license
function checkSpeed(speed) {
    let maxSpeed = 70;
    let increasePoints = 5;
    let points = Math.floor((speed - maxSpeed) / increasePoints);
    if (points < 1) {
        console.log("ok");
    }
    else if (points >= 12) {
        console.log("License cancelled");
    }
    else {
        console.log("points", points);
    }
}
checkSpeed(8)
checkSpeed(74)
checkSpeed(75)
checkSpeed(94)
checkSpeed(104)
checkSpeed(900)

// function checkSpeed(speed) {
//     let points = 0;
//     while (speed >= 75) {
//         speed -= 5;
//         points += 1;
//     }
//     if (points === 0) {
//         console.log("ok");
//     }
//     else if (points >= 12) {
//         console.log("License suspended");
//     }
//     else {
//         console.log(points);
//     }
// }
// checkSpeed(74)
// checkSpeed(75)
// checkSpeed(94)
// checkSpeed(104)
