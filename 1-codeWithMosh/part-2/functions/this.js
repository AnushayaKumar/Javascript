// // this represents the object that is executing the current function.


// if method in object =>then refers to object
// if normal function =>then refers to window(global)
// if constructor function => refers to object created by new keyword.


// callback function inside a function is considered a normal function and returns window on (this) logged

// 1.inside the object accessing a method with this refers to the object.

const person = {
    value: 10,
    run() {

        // here this in the run fucntion represents the object that executes this method
        console.log(this);
    }
}
// you'll get the person object displayed here
person.run();


// 2.If a normal fucntion is declared it refers to the window object or global object
function globalFunction() {
    // this will refer to the window object
    console.log(this);
}

// 3.constructor fucntion will refer to the object created by the new keyword.
function ConstructorFunction() {
    this.name = 'anu';
    this.walk = function () {
        console.log(this);
    }
}

const callConstructor = new ConstructorFunction();
console.log(callConstructor);
console.log(callConstructor.name);
console.log(callConstructor.walk());


// method1
const video = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        // here the function(tag) is a global function ,so if you refer
        // this here will return window object.
        //create an another argument this in the function(line.47) and make it refer to the local object
        // then access the local variable(this.title)(line.46)
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this)
    }
}
video.showTags();


// method2
// bind will refer to the object that it is contained in.
const video1 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this))
    }
}
video1.showTags();


// method3
// create a seperate variable to reference this and add that variable
const video2 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        })
    }
}
video2.showTags();

// method4
// using arrow functions will inherit this from
//  containing function not global function
const video3 = {
    title: 'a',
    tags: [1, 2, 3],
    showTags() {
        this.tags.forEach(tag => console.log(this.title, tag))
    }
}
video3.showTags();



const button = 'anushaya kumar';
button.split(" ");
console.log(button(this))


