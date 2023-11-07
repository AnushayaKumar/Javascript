// let blog = {
//     title: "a",
//     body: "b",
//     author: "c",
//     views: 10,
//     comments: [
//         { author: "c", body: "b" },
//         { author: "c", body: "b" }],
//     isLive: true
// }


// creating a constructor function for this
function Blog(title, body, author) {
    this.title = title;
    this.author = author;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Blog("a", "b", "c");

console.log(post);



