/*
1.Call stack is used to maintain the order of execution of the execution context.
2.Stacking execution context into it and removing when it is done executing
    Eg:
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *        E1       *
        *******************
        *       GEC       *
        ******************* 
       
       1.Firstly the GEC(global execution context) is added.
       2.Then while executing the local execution context(E1) is added.
       3.Then the E1 is completed and removed from the stack .
       4.Then further execution is executed and removed after executing.
       5.Finally GEC is completed and removed from stack.


    E1 is removed from stack.

        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *******************
        *       GEC       *
        ******************* 
       
       
    The stack is empty.   
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        *                 *
        ******************* 
       
       
       
       call stack is also known as

            1.execution context stack
            2.machine stack
            3.program stack
            4.control stack
            5.runtime stack

*/
