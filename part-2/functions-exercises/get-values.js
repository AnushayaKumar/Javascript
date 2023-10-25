const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.radius);
console.log(circle.area);

circle.radius = 20;
// we cannot overwrite get method as it is not set
// circle.area=50

console.log(circle.radius);
console.log(circle.area);