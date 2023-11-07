const marks = [80, 90, 70, 60, 50]
function grade(marks) {
    let total = 0;
    for (let value of marks) {
        total += value;
    }
    let average = total / marks.length;
    if (average < 60) return "F";
    else if (average < 70) return "D";
    else if (average < 80) return "C";
    else if (average < 90) return "B";
    return "A";
}
console.log(grade(marks))