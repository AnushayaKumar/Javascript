const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

// filter by year 2008 and rating>4
let filtered = movies.filter(movie => movie.year === 2018 && movie.rating > 4)
// sort in descending order
console.log(filtered.sort((a, b) => b.rating - a.rating))