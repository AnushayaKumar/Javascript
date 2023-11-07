function createCircle(radius) {
    // creating an object in a function is called a factory function.
    return {
        // radius returns radius:radius, if you have the same key and value then just simply give radius.
        radius,
        color: "yellow",
        // directly declare the function without the function keyword.
        draw() {
            console.log("draw");
        },
        variation: 2
    }
}
// creating multiple objects and calling createCircle()
const circleOne = createCircle(1);
const circleTwo = createCircle(10);
console.log(circleOne);
console.log(circleTwo);
// function calls are known as method calls here
console.log(circleTwo.draw());