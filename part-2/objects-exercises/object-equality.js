// create object using constructor
let constructorAddress1 = new ShowAddress("a", "b", "c")
let constructorAddress2 = new ShowAddress("a", "b", "c")
let constructorAddress3 = constructorAddress1;

function ShowAddress(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

// check if both objects are referencing to the same object
function areEqual(obj1, obj2) {
    return obj1 === obj2;
}

// values inside objects are equal
function areSame(obj1, obj2) {
    return obj1.street === obj2.street &&
        obj1.city === obj2.city &&
        obj1.zip === obj2.zip
}

// this will return false as they refer to the same constructor function
//  but the objects are stored in different memory locations
console.log(areEqual(constructorAddress1, constructorAddress2));

// this will return true as 1 and 3 are pointing to the same object.
console.log(areEqual(constructorAddress1, constructorAddress3));

// this will return true as all the properties are equal
console.log(areSame(constructorAddress1, constructorAddress2));

console.log(constructorAddress1);
console.log(constructorAddress2);




