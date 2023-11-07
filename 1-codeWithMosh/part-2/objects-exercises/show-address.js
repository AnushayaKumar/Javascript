// object for address
const address = {
    street: "Kotagiri",
    city: "Ooty",
    zipCode: 643217
}
// we're getting each entry as key value and displaying
function showAddress(address) {
    for (let entry of Object.entries(address))
        console.log(entry);
}

showAddress(address)


