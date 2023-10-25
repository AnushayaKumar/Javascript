let object = {
    string: "Anushaya",
    number: 13456,
    boolean: true,
    function: function () { console.log("hello world"); },
    undefined: undefined,
    null: null,
    object: {},
    array: [],
    date: new Date(),
    regularExpression: /pattern/
    // pattern that can be used in match(),replace(),test(). 
}

// add new property and method
object.newProperty = "yellow";
object.newMethod = function () {
    console.log("hello world")
}

console.log(object);

// deleting properties and methods
delete object.newProperty;
delete object.newMethod;

console.log(object);

