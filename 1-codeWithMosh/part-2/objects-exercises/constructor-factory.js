// factory function
// creating objects using fucntions
function showAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    }
}
let address = showAddress("a", "b", 6);
console.log(address)


// create object using constructor
function ShowAddress(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

let constructorAddress = new ShowAddress("a", "b", 1)
console.log(constructorAddress);

