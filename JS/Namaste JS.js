/*
        Everything in JS happens inside an Execution Context.
        JS is a synchronous single-threaded language.


                Execution Context
        
        | Memory component  | Code component |
        --------------------------------------
        | key : value       | ...            |
        | a : 10            | ...            |
        | fn : {...}        | ...            |


        Memory component is also known as Variable Environment.
        Code component is also known as Thread of execution.

        Call stack maintains the order of execution of execution contexts.

*/


/*
        1. var n = 2;
        2. function square (num) {
        3.     var ans = num * num;
        4.     return ans;
        5. }
        6. var square2 = square(n);
        7. var square4 = square(4);


        Phase 1 :- 
            Memory creation / Creation phase :-

                
                        Execution Context
        
                Line| Memory component      | Code component |
                    ------------------------------------------
                1 | n : undefined         |
                2 | square : {whole code} |
                6 | square2 : undefined   |
                7 | square4 : undefined   |
                
                
                
            Phase 2 :-
            Code execution phase :-
                
                        							Execution Context

                Line| Memory component    |							Code component 								|
                    ----------------------------------------------------------------------------------------------
                1 | n : 2                 |
                2 | square : {whole code} |
                6 | square2 : 4		   ---|--->                 Execution Context (for square2 function invoke)
                7 | square4 : undefined   |     phase 1 :	| Memory component 	| Code component |
				  |						  |					--------------------------------------
				  |						  |					| num : undefined	|
				  |						  |					| ans : undefined	|
				  |						  |					
				  |						  |		phase 2: 	| Memory component 	| Code component |
				  |						  |					--------------------------------------
				  |						  |	 				| num : 2			|	num*num (= 4, ans replace undefined with value 4)
				  |						  |					| ans : 4			|
				  |						  |			
				  |						  |			return 4 and square2 value change from undefined to 4;
				  									After returning value this execution context removed from the call stack.

				  		For square4, there will be a new execution context same as square2. From the execution context value will be returned to square4
						and undefined replaced by that value.

	
	After whole code executed call stack become empty.
				
*/





/*      
        *** Hoisting ***
		----------------


	Case 1:
			var x = 7;
			function fun(){
				console.log('Namaste JS');
			}
			fun();
			console.log(x);

		O/P : 	Namaste JS
				7

	
	Case 2:
			fun();
			console.log(x);
			var x = 7;
			function fun(){
				console.log('Namaste JS');
			}

		O/P :	Namaste JS
				undefined



	Case 3:	
			fun();
			console.log(x);
			function fun(){
				console.log('Namaste JS');
			}

		O/P :	Namaste JS
				x is not defined (Uncaught reference error)




	Hoisting is the phenomena in JS by which you can access this function and variable even before you have initialized it or you have put some 
	value in it. You can access it without any error. 
*/



/*
			*** Function & variable ***
			-----------------------------

		JS is a loosely typed language. A variable can store any data type of value.

		Case 1:
			getName();
			console.log(x);
			let x = 10;
			function getName(){
				console.log('Soumen');
			}

		In execution context's first phase variable and function reserve memory. x will be undefined where as the function copy the whole code in memory component.
		Thats why if function is called before initialization it will not give any error.


		Case 2:
			getName();
			var getName = ()=>{
				console.log('Soumen');
			}

		getName() behave like a variable and in first phase of execution context it is undefined.
		
		
		 
		Case 3:
			getName();
			var gateName = function(){
				console.log('Soumen');
			}
		getName() behave like a variable and in first phase of execution context it is undefined.

*/



/*

			*** Shortest JS programme ***
			-----------------------------

		Shortest JS programe is a empty file.
		
		A global execution context is created and also set up memory space. 
		JS engine create 'window' and 'this' keyword. Window is a global object which is being created along with the global execution context.
		At the global level this points to the window.

		What is global space?
		--> Any code(variable or fucntion) write inside js which is not written inside function. This global space content is got attached to window.
			
			let x = 1;
			function abc(){
				let y = 10;
			}

			x and function abc is in global space but y is not in global space.
*/


/*

			*** undefined and not defined ***
			---------------------------------

		When a variable is created, js engine assign a placeholder called 'undefined' if it is not assign any value or accessed before initializing.
		Actually in execution context first phase i.e. memory creation phase, every variable is assigned with undefined by js engine.

		When a variable is not declared i.e. not found in its scope chain and we want to access it js throw an error called not defined.
		  
*/




/*
			*** Scope ***
			-------------

		Scope is where you can access a specific variable and function in our code.
*/


/*			*** Lexical Environment and scope chain ***
			-------------------------------------------
			
		Whenever a execution context is created, lexical environment is also created.
		Lexical environment is the local memory along with lexical environment or its parent.
		Lexical mean hierarchy.

		function a(){
			var num = 10;
			function b(){
				console.log(num);
			}
		}
		a() is lexcally sitting under global scope and b() is lexically sitting under a().
		Lexical environment of b() is local memory and lexical environment of a().
		Lexical environment of a() is local memory and lexical environment of global execution context.
		Lexical environment of global is local memory and it points to NULL.
		

		When console.log(num) is executed, first it checks lexical environment of b(), when it does not find 'num' then it goes to lexical environment
		of its parent a() and get the value of 'num' and print the value.
		If it did not get then it checks for its parent and its parent hierarchically. This process is known as ***scope chain***.
*/



/*	
			*** let and const ***
			---------------------

		Variable created using let and const keyword are also hoisted in JS but differently.


		let a = 10;
		var b = 20;

		When memory is allocated, b is attached to the global object, thats why when we access before declaration it gives a placeholder 'undefined'
		but for 'a', it is also allocated memory but does not attached to the global object, instead it stored in different memory space called 'script'.
		And it cannot be accessed before initializing(putting value). 
		Thats why when it is accessed before declaration it gives a error 'referenceError : cannot access 'a' before initialization'. 

		Temporal dead zone :-
		-------------------		It is the time since when the let variable is hoisted(at the beginning of local scope) and till it is initialized value.
		
*/
		
		
/*
		*** Types of error ***
		----------------------

	console.log(a);		//referenceError : cannot access variable before initialization.
	let a = 10;
	let a = 20;			//SyntaxError : identifier a is already been declaired
	var a = 50;			//SyntaxError : identifier a is already been declaired
	var b = 30;
	var b = 40;			//no error
	console.log(c);		//referenceError : variable not defined.
	const d = 60;
	const e;			//SyntaxError : missing initializer in const declaration
	d = 70; 			//TypeError : Assignment to constant variable.
		
	--Whenever you try to access a variable in temporal dead zone it gives referenceError : cannot access variable before initialization.
	--Whenever a variable is not declared throughout the code then it gives referenceError : variable not defined.
	--When a syntax error is there no code is executed. JS reject the code upfront. It does not execute single line of code.
*/




/*
			*** Block ***
			-------------

	It is defined by carly braces and it combine multiple JS statement into a group.
	We group multiple statements together in a block so we can use it where JS expect single statement.
	e.g. 
		if(true)								if(true)
			console.log('hello');				{
													//statements
												}

		'if' expect only single line of code, but if we want to execute multiple statements then we group multiple statements in a single group.

	
	let and const are block scoped, outside block it can't be accessed. It got deleted from block memory when block finish execution. 
	Outside of the block it has no existance.
	e.g.
		{
			var a = 1;
			let b = 2;
			const c = 3;
			console.log(a);			//1
			console.log(b);			//2
			console.log(c);			//3
		}
		console.log(a);				//1
		console.log(b);				//error
		console.log(c);
*/


/*
			*** Shadowing ***
			-----------------

		var a = 10;					'a' is in global scope
		let b = 20;					'b' is in script scope
		const c = 30;				'c' is in script scope
		{
			var a = 100;			'a' is in global scope	//shadows the old variable
			let b = 200;			'b' is in block scope	//shadows the old variable
			const c = 300;			'c' is in block scope	//shadows the old variable

			console.log(a);			//100
			console.log(b);			//200
			console.log(c);			//300
		}
		console.log(a);			//100		because 'a' is in same memory location
		console.log(b);			//20		
		console.log(c);			//30		


	Illigal shadowing :-
	-------------------
		let a = 10;
		var b = 20;
		{
			var a = 100;		//illegal shadowing
			let b = 200;		// Legal shadowing
		}
		
		It gives a syntax error. As variable created using var is function-scoped if it is defined within a function, otherwise througout the file.
		As it is declaired under block then it has a global scope, but variable declaired using let let keyword has block scope,
		thats why shadowing is illigal.

		If a variable is shadowing something then it shoukd not cross the boundary of it's scope. 
*/



/*
			*** Closure ***			Impotant for Interview
			---------------  		----------------------

		A function along with its lexical environment bundled together is closure.
		In other word, a closure gives access to an outer function's scope from an inner function.
		Closures are created every time a function is created.

	In function :-
	-------------
		function x(){
			var a = 7;
			function y(){
				console.log(a);
			}
			a = 100;
			return y;
		}

		var p = x();
		p();			//O/P- 100
	
		When x() is called then after execution of function x() the function got removed from call stack. There is no existance of the function x().
		But x() function return the function y() and it stored in the 'p' variable. When p() got invoked then it try to print the value of 'a' which
		is not present in the global scope. But it will print the value of 'a' because of closure. When function y() is returned its closure is also
		returned which contains the reference of 'a'. It prints 100 instead of 7 because the reference of a is returned.


		function x(){
			var b = 20;
			function y(){
				var a = 7;
				function z(){
					console.log(b);
				}
				z();
			}
			y();
		}
		x();					O/P - 20
*/



/*
				*** setTimeout ft. closure ***
				------------------------------

	1)	function x(){
			var i = 10;
			setTimeout(() => {
				console.log(i);
			}, 1000);
			console.log('hello');
		}
		x();					
		
		O/p-
			hello 
			10 (after 1 sec)


	2)	for(var i=1; i<=5; i++){
			setTimeout(()=>{
				console.log(i);
			}, 1000*i);
		}

		O/p:-
			6 (after 1s)
			6 (after 1s)
			6 (after 1s)
			6 (after 1s)
			6 (after 1s)

		Output is 6 because of closure. When the function is taken out from the scope, it still remember it's variable's reference. After the
		delay the loop has already terminated and i become 6, as the function has its reference it prints 6.


	solution:- using let --
	---------------------
		for(let i=1; i<=5; i++){
			setTimeout(()=>{
				console.log(i);
			}, 1000*i);
		}

		O/p:-
			1 (after 1s)
			2 (after 1s)
			3 (after 1s)
			4 (after 1s)
			5 (after 1s)
		Instead of using var use let, because let is block scoped, at each iteration its a new copy of i is send to the function. Each time 
		setTimeout is run this callback function has a new copy of i with it.
		Thats because it first print 1 and 2 and go n


	solution :- using wrapup function --
	----------------------------------

		for(let i=1; i<=5; i++){
			function a(x){
				setTimeout(()=>{
					console.log(i);
				}, 1000*i);
			}
			a(i);
		}

		O/p :-
			1 (after 1s)
			2 (after 1s)
			3 (after 1s)
			4 (after 1s)
			5 (after 1s)
		When a() function is called a copy of i is passed through x, in each iteration a new copy of i is sent to the inner function a().
*/


/*
			*** Advantage and Disadvantage of closure ***
			---------------------------------------------

	Advantages :-
	-----------

	Disadvantages :-
	--------------
		Overconsumption of memory because those closed over variables are not garbage collected till the program ends.
		If not handled properly then it can also lead to memory leak.
*/


/*
			*** function ***
			----------------

	When we create constructor function it should be created using 'new' keyword. 

	Annonymous function :-
	--------------------
		A function without name is an annonymous function. It does not have its own identity. It is used when functions are used as a value.
		If it is does not treated as values then it will give a syntaxError called 'function statements  require a function name'.


	Function statement aka function declaration :-
	-------------------------------------------
		function a(){
			console.log('Function statement');
		}

	Function expression :-
	--------------------
		var fn = function (){
			console.log('Function expression');
		}

	Difference b/w function statement & expression :-
	----------------------------------------------
		Function statements are hoisted, which means they are available for use before they are actually defined in the code.
		Function expressions are not hoisted, which means they cannot be called before they are defined in the code.


	Named function expression :-
	-------------------------
		In function expression if we use a named function instead of using annonymous function then it will become named function expression.
		But the function cannot be called using function name. It will give an error. Because it is not present in that scope. It is available in local scope.
		It can be used inside the function.

		var fn = function abc(){
			console.log('Named function expression');
			console.log(abc);		//	ƒ abc(){							//Print the whole function
									//		console.log('Named function expression');
									//		console.log(abc);
									//	}
		}
		fn();	//Named function expression
		abc();	//ReferenceError : abc is not defined


	Parameter and Argument :-
	----------------------
		A parameter is the variable defined in a function's definition.
		Argument is the value passed to the function when it is called.

		function abc(parameter1, parameter2){
			//line of codes
		}
		abc(argument1, argument2);



	First class function :-
	---------------------
		The ability of function to be used as values is first class function.
		in other words, first class functions are functions that are treated as other variables.
		That means functions can be assigned to variables, passed as arguments to other functions, and can be returned by another functions.

		Q> Functions are first class citizen.
		-> Ability to be used like values makes the function as first class citizen in JS.


	Callback function :-
	------------------
		A function that is passed to another function is called callback function.
*/



/*
			*** Behind the scene ***
			------------------------


		--------------------------------------------------------------------------------------------
		|																							|
		|																							|
		|																							|
		|		----------------																	|
		|		|				|																	|
		|		|				|																	|
		|		|	|		|	|																	|
		|		|	|		|	|																	|
		|		|	|		|	|																	|
		|		|	| Call	|	|																	|
		|		|	| Stack	|	|																	|
		|		|	|		|	|																	|
		|		|	|		|	|																	|
		|		|	---------	|																	|
		|		|				|																	|
		|		----------------																	|
		|			JS Engine																		|
		|																							|
		|																							|
		|																							|
		---------------------------------------------------------------------------------------------
												Browser


		Web APIs :-
		---------
			These are not part of JS, browser gives this access to all the APIs inside JS engine to use these.
				* setTimeout()
				* DOM APIs			(document.)
				* fetch()
				* localStorage
				* console
				* location			(https://...)

		
*/



/*
			*** JS Runtime Environment & JS Engine ***
			------------------------------------------

		A container which contains all the things required to run JS code.
		Browser, Node.js has JS Runtime Environment.
		
		JS Runtime Environment has	
				-- JS Engine
				-- APIs
				-- Event loop
				-- Callback queue
				-- Microtask queue

		JS Engine is a program, Every JS Engine should follow ECMAScript language standard.
		First JS Engine is SpiderMonkey, used in firefox.

		JS Engine Architecture :-
		-----------------------
			  Code
				|
				V
			 Parsing
			 	|
				V
			Compilation
				|
				V
			Execution

		In parsing level code is broken down to Tokens. There is a syntax perser which take the code and convert it in AST(Abstract Syntax Tree).


		JS engine has JIT compilation (Just In Time Compilation). Some JS Engine has AOT Compiler (Ahead Of Time).


		V8 JS Engine (chrome) :-
		----------------------
					JS Source code  ->  Parser  ->  Abstract Syntax Tree  ->  Interpreter (Ignition)  ->  Bytecode
																						|					  ^
																						V					  |
																			Compiler (TurboFan)	-> Optimized Machine code
*/


/*
			*** Garbage Collection ***
			--------------------------

		Whenever some functions are not in use garbage collector free up these memories.
		V8 (chrome) use Orinoco Garbage Collector which use Mask & Sweep Algorithm.
*/



/*
			*** Higher order function ***
			-----------------------------

		A function which take another function as argument or return a function from it, known as higher order function.

		function x(){
			
		}
		function y(x){
			x();
		}
		Here y() is a higher order function and x() is a callback function.



	Good coding convension using higher order function :-
	---------------------------------------------------
		
		const radius = [3,2,6,8,4];
		
		const area = function (radius){
			const output = [];
			for(let i=0; i<radius.length; i++){
				output.push(math.PI * radius[i] * radius[i]);
			}
			return output;
		}

		const diameter = function (radius){
			const output = [];
			for(let i=0; i<radius.length; i++){
				output.push(2 * radius[i]);
			}
			return output;
		}
		
		const circumference = function (radius){
			const output = [];
			for(let i=0; i<radius.length; i++){
				output.push(2 * math.PI * radius[i]);
			}
			return output;
		}

		console.log(area(radius));
		console.log(diameter(radius));
		console.log(circumference(radius));


	This whole repettive functions can be written in a single function and everytime logic can be changed to perform dedicated work.
	So the whole code can be written as --
		
		const radius = [3,2,6,8,4];

		const area = function (radius){
			return Math.PI * radius * radius;
		}

        const circumference = function(radius){
            return 2 * Math.PI * radius;
        }

        const diameter = function (radius){
            return radius * 2;
        }

		const calculate = function (radius, logic){
			const output = [];
			for(let i=0; i < radius.length; i++){
				output.push(logic(radius[i]));
			}
            return output;
		}

        console.log(calculate(radius, area));
        console.log(calculate(radius, circumference));
        console.log(calculate(radius, diameter));
*/



/*
				*** map, filter, reduce ***
				---------------------------
	Map :-
	-----
		Map method is used when we want transformation of whole array.

		const arr = [4,1,5,2,6];

		// Double
		function doubleFunction(x) {
			return x*2;
		}
		const double = arr.map(doubleFunction);
		console.log(double);

		// Triple
		const triple = arr.map(function (x){
			return x * 3;
		});
		console.log(triple);

		// Binary
		const binary = arr.map((x) => x.toString(2));
		console.log(binary);


	Filter :-
	------
		Filter is used when we want to filter the arrar to obtain required value.

		const arr = [4,3,6,2,7];
		const oddValues = arr.filter((x) => x%2);
		console.log(oddValues);						// [3, 7]



	Reduce :-
	-------
		reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).

		const arr = [5,3,8,9,1,3];
		const output = arr.reduce(function (acc, curr) {
			acc = acc + curr;
			return acc;
		}, 0)
		console.log(output);




	More examples :-
	-------------
		const users = [
			{firstName : "Soumen", lastName : "Dey", age : 24},
			{firstName : "Donald", lastName : "Trump", age : 64},
			{firstName : "Katrina", lastName : "Kaif", age : 44},
			{firstName : "Narendra", lastName : "Modi", age : 44}
		];

		// Full name
		const fullName = users.map(function (obj) {
			return (obj.firstName + " " + obj.lastName);
		});
		console.log(fullName);				//['Soumen Dey', 'Donald Trump', 'Katrina Kaif', 'Narendra Modi']


		
		// Total person of that age group
		const groupByAge = users.reduce(function (group, obj){
			if(group[obj.age]){
				group[obj.age]++;
			}else{
				group[obj.age] = 1;
			}
			return group;
		}, {});
		console.log(groupByAge);			// {24: 1, 44: 1, 64: 2}



		//First name whose age less than 50
		const temp = users.filter((x) => x.age < 50);		// Filter out the object whose age is less than 50
		const output = temp.map((x) => x.firstName);		// Give first name
		// const output = users.filter((x) => x.age < 50).map((x) => x.firstName);		// Can be written in a chain
		console.log(output);								// ['Soumen', 'Katrina']



		//Homework - Do using reduce
		const output1 = users.reduce(function (arr, obj){
			if(obj.age < 50){
				arr.push(obj.firstName);
			}
			return arr;
		}, []);
		console.log(output1);
*/	