/*
*****Everything in javascript happens inside a execution context*****
      1. javascript is a single threaded synchronised language
      2.single threaded - thats is only one thread, single line is executed at a time and
      3. synchronised - after execution of a line only the next line is executed.


Execution Context:      
      1.A global execution context is created everytime you execute a js code
      2.And deleted after code id completed.
      3.For functions a local execution context is created everytime and deleted after funtion is executed.


Execution Context has two parts:
      1.variable environment (memory):
            In memory the variables and functions are stored in key value pairs.
      2.thread of execution:
            Each line of code executing is known as thread of execution

/*
********************************************************************************
*       variable environment(memory)     *      Thread of execution(code)      *
********************************************************************************
*          key :value                    *                line 1 of code       *
*          a:10                          *                line 2 of code       *
*          function: {}                  *                line 3 of code       *
*          b:10                          *                line 4 of code       *
********************************************************************************
*/

/*
How JS is actually executed in the execution context:

Program:
      var n=2;

      function square(num)
      {
            var ans=num*num;
            return ans;
      }

      var square2=square(5);
      var square10=square(10);


Execution context is divided into two phases 
      1.memory allocation phase.
      2.execution phase.


1.memory allocation phase:
      1.memory is frst allocated to the variables,functions by going through each line.
      2.The values of the variables will be undefined.
      3.The values of functions will be the entire function.

      Eg.
            *************************************************************************
            Variable environment(memory)          *          Thread of execution(code)
            *************************************************************************
                  n:undefined                     *
                  square:{Entire function}        *
                  square2:undefined               *
                  square10:undefined              *
            ***************************************************************************
      
 
2.Code Execution Phase:
      1.This is the thread of execution phase where each line is executed.

Eg:
****************************************************************************************************************
Variable environment(memory)         *            thread of execution(code)
*****************************************************************************************************************
      n:2                            *                var n=2; 

      square:{}                      *                var square2=square(5);
                                     *
                                     *             **************************************************************
      square2:25                     *             *    variable environment    *   thread of execution(code)   *
                                     *             **************************************************************
                                     *             *        num:5               *          value in fun call    *
                                     *             *        ans:25              *          num*num              *
                                     *             **************************************************************
                                     * 
                                     *       After the function is completed the execution function for 
                                     *       function is deleted     
                                     * 
                                     * 
********************************************************************************************************************                                                 

Now the entire code execution is completed ,So the execution context is also deleted.

*/