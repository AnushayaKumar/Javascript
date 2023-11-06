/*
1.The lexical environment:
    1.lexical environmet is created each time an execution context is created and added into the call stack.
    2.It consists of
        1.The local scope of the function.
        2.The lexical scope of the parent.

2.The scope chain:
    The chain of lexical environment is called the scope chain.
*/

// lexical environment.
function a() {
    /*
    1.lexical environment has local scope of b=10 and fucntion c().
    2.It has lexical parent scope:
        1.global scope.
    */
    var b = 10;
    c();

    /*
    1.function c creates a execution context and lexical environment.
    2.lexical environment has no local scope
    3.It has lexical parent scope:
        1.a()
        2.global scope.
     */
    function c() {
        console.log(b);
    }
}
a();

/*1.The global scope also has a lexical environment 
    1.local scope a().
    2.lexical parent scope is null as there is no parent lexical for global.
*/
