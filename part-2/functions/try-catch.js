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
        if (typeof value !== 'string')
            throw new Error('value is not a string');
        const parts = value.split(" ");
        if (parts.length !== 2)
            throw new Error('Enter the first name and last name');

        this.fName = parts[0];
        this.lName = parts[1];
    }
}
try {
    person.fullName('John Smith');
}

catch (e) {
    console.log(e)
}

console.log(person);

// a method can be accessed as a property
console.log(person.fullName);
