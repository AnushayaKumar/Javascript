//Getters and setters allow you to define the behavior
// when getting or setting the values of an object's properties

// get= access the properties
// set= change them 

const person = {
    fName: 'Anushaya',
    lName: 'Kumar',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

person.fullName = 'John Smith';

console.log(person);

// a mathod can be accessed as a property
console.log(person.fullName);
