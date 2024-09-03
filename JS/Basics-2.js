/*  Episode #1 :-
    -----------

        # Callback :
            Super powerfull way of handling async operation in JS
           
            Problems --
                - Callback hell / Pyramid of doom :
                        // Passing a callback function to another function.
                        api.createOrder(cart, function (orderId){
                            api.proceedToPayment(orderId, function (paymentInfo){
                                api.orderSummery(paymentInfo, function(){
                                    api.updateWallet()
                                })
                            })
                        })

                - Inversion of control :
                        We loose control of our program because we pass our callback function to another function and
                        give control of our function to other function, we dont know wheather that function will ever 
                        execute our callback or not.

                1 - Callback hell
                    When a function is passed as an argument to another function, it becomes a callback function. This 
                    process continues and there are many callbacks inside another's Callback function.
                    This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

                2 - Inversion of control
                    The callback function is passed to another callback, this way we lose the control of our code. We 
                    don't know what is happening behind the scene and the program becomes very difficult to maintain. 
                    That process is called inversion of control. 

*/


/*  Episode #2 :-
    ----------

        # Promise:
            It is a placeholder which will be filled later with a value.
            Container for future value.
            MDN - Object that represent eventual completion or failure of async operation.
            Promise is immutable when it is resolved.


            const promise = api.createOrder(cart);      // createOrder() returns a promise (like empty object = {data: undefined}). As soon as it fulfills value is stored in the object.

            // Attaching the callback function to a promise object solves the problem of Inversion of control
            promise.then(function(orderId){             // as soon as we have data inside promise object the callback function that is attached to the promise will be automatically called.
                api.proceedToPayment(orderId);          // Better than previous solution
            });


            
            // Promise chaining - solve the problem of callback hell
            api.createOrder(cart)
              .then(function(orderId){
                return proceedToPayment(orderId);   //To send the response to orderSummery(), return is used
              })
                .then(function(paymentInfo){
                    return orderSummery(paymentInfo);
                })


            // Can be written using arrow function
            api.createOrder(cart)
            .then((orderId) => proceedToPayment(orderId))
            .then((paymentInfo) => orderSummery(paymentInfo));




            1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
            2. Inversion of control is overcome by using promise.
            2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
            2.2) A promise has 3 states: pending | fulfilled | rejected.
            2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
            2.4) A promise resolves only once and it is immutable. 
            2.5) Using .then() we can control when we call the cb(callback) function.

            3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
            4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()


            
            2. Importance of Promises:
                a) Promises can help us to write trust worthy code.
                b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
                c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
                d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
                e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.
                f) Promise result is immutable.

*/


/*  

    # Creating a Promise and promise chain :-
    --------------------------------------
        const cart = ["Shoes", "Shirts", "Pants"];

        const promise = createOrder(cart);  // API - returns orderId

        promise.then(function (orderId){        // Callback function attached to then (not passed like callback hell)
            // orderId created 
            console.log(orderId);
            //go to next step
            return orderId;
        }) 
        .then(function (orderId){
            return proceedToPayment(orderId);   // it returns promise to the next level
        })
        .then(function (paymentInfo){
            console.log(paymentInfo);
        })
        .catch(function (err){   // error handling
            cnsole.log(err.message);
        });


        // create order API producer function
        function createOrder(cart){
            const pr = new Promise(function(resolve, reject){
                // create order logic
                // validate cart
                if(!cartValid(cart)){
                    const err = new Error("Cart is not valid");
                    reject(err);
                }
                // create orderId
                const orderId = "12345"; // from DB
                if(orderId){
                    resolve(orderId);
                }
            });

            return pr;
        }

        // payment info API
        function proceedToPayment(orderId){
            return new Promise(function(resolve, reject){
                resolve("Payment Successfull");
            })
        })
            

    NOTE :=
    ----
        If any one of then method has encounter error then the entire then method after that errornous then method will not be called and catch will handle the error. If we want to execute after encountering any error then we have to put the catch after that errornous then method.

        eg. 
        createOrder(cart)
        .then(function (orderId){
            console.log(orderId);
            return proceedToPayment(orderId);
        })
        .catch(function(err){
            console.log(err.message);
        })
        .then(function(paymentInfo){
            console.log(paymentInfo);   //it will always be executed even after previous then method encountered any error.
        })
*/




/*
    # Async- Await :-
    --------------
        
        // Always returs a promise
        async function getData(){
            // return Promise / value(wrap up in a promise if it is not a promise)
        }


        const p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Promise resolved.");
            }, 5000);
        });

        // using conventional method to handle Promise
        function handlePromise(){
            p.then((result) => console.log(result));
            console.log("will not wait for promise to be resolved, i.e. execute immediately");
        }
        
        // using async-await
        async function handlePromise() {
            const result = await p;     // await can only be used in async function
            console.log("will wait for promise to be resolved, i.e. do not execute immediately");
            console.log(result);
        }



        # Case 1
            const p = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve("Promise resolved.");
                }, 5000);
            });
            async function handlePromise() {
                console.log("Execute immediately")
                const result = await p; 
                console.log("Will exeute after promise resolved");
                console.log(result);    // Will exeute after promise resolved

                const result2 = await p; 
                console.log("will execute after promise resolved, immediately with the previous log");
                console.log(result2);    // Will exeute after promise resolved
            }
            handlePromise();



        # Case 2
            const p1 = new Promise(resolve, reject){
                setTimeout(()=>{
                    resolve("Promise 1");
                },5000);
            }
            const p2 = new Promise(resolve, reject){
                setTimeout(()=>{
                    resolve("Promise 2");
                }, 10000);
            }
            async function handlePromise(){
                console.log("Hello world");     // Execute immediately
                const res1 = await p1;
                console.log(res1);          // Wait for 5s to resolve promise p1 then execute
                const res2 = await p2;
                console.log(res2);          // wait for extra 5s, take extra 5s after p1 resolved then execute
            }
            handlePromise();



        # Case 3
            const p1 = new Promise(resolve, reject){
                setTimeout(()=>{
                    resolve("Promise 1");
                }, 10000);
            }
            const p2 = new Promise(resolve, reject){
                setTimeout(()=>{
                    resolve("Promise 2");
                }, 5000);
            }
            async function handlePromise(){
                console.log("Hello world");     // Execute immediately
                const res1 = await p1;
                console.log(res1);          // Wait for 10s to resolve promise then execute
                const res2 = await p2;
                console.log(res2);        // does not wait for extra 5s as it also resolves, execute with res1
            }



        # Behind the scene
        - Case 1
            1   const p1 = new Promise(resolve, reject){
            2       setTimeout(()=>{
            3           resolve("Promise 1");
            4       },5000);
            5   }
            6   const p2 = new Promise(resolve, reject){
            7       setTimeout(()=>{
            8           resolve("Promise 2");
            9       }, 10000);
            10  }
            11  async function handlePromise(){
            12      console.log("Hello world");     // Execute immediately
            13      const res1 = await p1;
            14      console.log(res1);          // Wait for 5s to resolve promise p1 then execute
            15      const res2 = await p2;
            16      console.log(res2);          // wait for extra 5s, take extra 5s after p1 resolved then execute
            17  }
            18  handlePromise();
            
            // When execution comes to line no 18 then function start execution and the function push to the call stack and execute line no 12. After that it encounter 'await' in line no 13 and the function execution suspended and moved out from the call stack and wait for the promise to be resolved. When promise resolved then it again comes to the call stack and execute from where it left (line no 13). After that it again encounter 'await' at line no 15 and it check if it is already resolved or not, if it is resolved then it continue executing and if it is not resolved then again function execution got suspended and move out from the call stack.

        - Case 2
            1   const p1 = new Promise(resolve, reject){
            2       setTimeout(()=>{
            3           resolve("Promise 1");
            4       }, 10000);
            5   }
            6   const p2 = new Promise(resolve, reject){
            7       setTimeout(()=>{
            8           resolve("Promise 2");
            9       }, 5000);
            10  }
            11  async function handlePromise(){
            12      console.log("Hello world");     // Execute immediately
            13      const res1 = await p1;
            14      console.log(res1);          // Wait for 5s to resolve promise p1 then execute
            15      const res2 = await p2;
            16      console.log(res2);          // wait for extra 5s, take extra 5s after p1 resolved then execute
            17  }
            18  handlePromise();

            // In this case execution suspended at line no 13 and function execution move out from the call stack. After 10s when the promise resolved then the function again move to the call stack and continue execution from where it left execution and when execution goes to the line no 15 the promise p2 already resolved at 5s, so the function continue executing and log 'res2' immediate after logging 'res1'.



    # fetch () and error handling in async await :
    --------------------------------------------
        method 1 :
            async function apiCall() {
                try{
                    const data = await fetch(API_URL);   // fetch returns a Promise and gives a response when it resolves
                    const jsonData = await data.josn();  // this .json() is also a promise and when it resolves it gives json value
                }
                catch(error){
                    console.log(error);
                }
            }
            apiCall();


        method 2 :
            async function apiCall() {
                const data = await fetch(API_URL);   // fetch returns a Promise and gives a response when it resolves
                const jsonData = await data.josn();  // this .json() is also a promise and when it resolves it gives json value
            }
            apiCall().catch((err)=>console.log(err));

*/



/*
    # Promise APIs :-
    ----------------
            
        4 APIs :
            1. Promise.all()
            2. Promise.allSettled()
            3. Promise.race()
            4. Promise.any()


        # Promise.all() :
        ----------------
            It takes iterables(eg array) of Promises.

*/