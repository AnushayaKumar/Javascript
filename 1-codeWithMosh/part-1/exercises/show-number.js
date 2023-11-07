// find the values inside a limit is odd or even
function showNumbers(n) {
    for (let i = 0; i <= n; i++) {
        // if (i % 2 === 0) console.log("EVEN", i);
        // else console.log("ODD", i);
        let meaning = i % 2 === 0 ? "EVEN" : "ODD";
        console.log(meaning, i);
    }
}

// showNumbers(10);
// showNumbers(0);
// showNumbers(5);
showNumbers(8);