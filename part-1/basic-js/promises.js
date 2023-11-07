// promises are objects that represent eventual
// completion or failure of a asynchronised operation.
const cart = ['bottle', 'pen', 'pencil']


// this will create a promise object and {data:undefined}
const promise = cartOrder(cart);
// after the promise object gets the data (or filled with data only then "then" will be called) and completed execution it will be filled
// promise={data:cartOrderDetails}


// after the promise is executed then if you want to do other things
// use this
promise.then(function (orderId) {
    paymentProceed(orderId);
})




// promises are immutable ..you can't edit promises as (eg. user.value = "")
// promises helps to reduce the confusion of call backs into function
// eg.function red(color,function(){...})
// call back inside red is removed and added as then in promises.that is after completing red..go to then



// ********************************************************
// here user create a promise object that has three things

// prototype=promise


// promsie state=
// 1.pending(it is in the execution state, that is neither fulfilled nor rejected)
// 2.fulfilled(after the promise is successfully completed and returns a value)
// 3.rejected(if the promise is failed or the operation failed to fetch)



// promise result =
// 1.before execution it is undefined({ data: undefined })
//  2.after execution it is the data of the promise object({data:actual data})
// ***********************************************************************


// example
const egAPI = "https://www.boredapi.com/api/activity";

const user = fetch(egAPI);

user.then(function (data) {
    // this data logs the data that is as response from the promise object
    console.log(data)
})


// eg2
// const promise1 = createOrder(order);
// promise1.then(payment => proceedToPayment(payment))
//     .then(details => showOrderDetails(details))
//     .then(info => paymentInfo(info))


// this can also be written as
// promises are used to solve call back hell and inversion of control
// inversion of control is that giving the control of the call back functions code to the function
//  where it is passed as parameter
createOrder(order) //this will return a promise
    .then(payment => proceedToPayment(payment))
    .then(details => showOrderDetails(details))
    .then(info => paymentInfo(info))









