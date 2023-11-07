//1.var is not blocked scoped.

// this will be in a global scope
var c = 100;
// they aren't blovk scoped so the values in block will also be stored in global
{
    var c = 10;
    // 10
    console.log(c);
}
// 10
console.log(c);

// 2. let and const are not.

// this will be in a script scope.
let d = 100;
// this will be in a block scope
{
    let d = 10;
    // 10
    console.log(d);
}
// 100
console.log(d);


/*
1.Shadowing :
    Shadowing a variable that is declared global into block scope is called shadowing.
    The value declared in the global scope is shadowed by the value that is declared in the local scope. */
var r = 10;
{
    var r = 100;
}




