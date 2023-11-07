// show key and values where value is a string
const movie = {
    title: "AAA",
    director: "AAA",
    releaseYear: 2023,
    rating: 9
}
function showProperties(obj) {
    for (property in obj) {
        if (typeof obj[property] === 'string') console.log(property, obj[property]);
    }
}
showProperties(movie)




