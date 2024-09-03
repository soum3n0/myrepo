// 1.  What is JavaScript ?
// >   A light-weight programming language. It is actually a scripting(client-side) language.
//     First developed by Netscape in just 10 Days, first name is Mocha, then its name become livescript, after that its name became JavaScript.

// 2.  Which engine is used to run javaScript
// >   V8(written in C++) is used by Chrome browser.
//     SpiderMonkey engine is used by Firefox browser.


/*      *** Variable ***
   1.   To declare variable 'let' and 'var' keyword is used.
        ex - let a = 5;   or   var a = 5  or  let name='Soumen';
   2.   variables created using 'let' is local variable, can be accessed eithin the scope and variables created using 'var' can be acccessed within the function,
        if it is defined under function, if not defined under function then can be accessed thoughout the files.  
   3.   No datatype is used.
   4.   Dynamic typing :-
            If a variable is created and assigned number, later it can be used to store another data type like string or boolean etc.
            ex -    let a = 5;
                    console.log(a);
                    a = 'Soumen';
                    console.log(a);

            o/p-    5
                    Soumen
*/

/*      *** Constant ***
        Assigned value can't be changed.
        const a = 5;
*/

/*      *** Rules of creating a variable ***
        1. keyword can't be used.
        2. can not start with a number.
        3. cannot contain space or hiphen.
        4. should use camelcase and should be meaningful.
*/

/*      *** Premitive Datatype ***
        1. String :- sequence of character written in single quotation.
                    ex - 'Soumen' 
        2. Number :- 1, 2, 3.5, -5 etc.
        3. Boolean :- true, false.
        4. Undefined :- Value is not defined.
                        ex- let a;
                            console.log(a);         o/p - undefined
        5. Null :- empty.
                    ex - let a = null;
*/

/*      *** Reference Types ***
        1. Objects
        2. Arrays
        2. Functions

    1. Objects :-
        A entity which stores multiple data types in a single place.

        ex- let person = {
                firstName : 'Soumen',
                lastName : 'Dey',
                age : 24
            };
        
        how to access --
            console.log(person.age);    or
            console.log(person['age']);


    2. Array :-
        A data structure used to contain list of items (same or different datatype).
        0 base indexing in used.

        ex- let arr = ['soumen', 'dey', 24];

        how to access--
            console.log(arr[2]);

        arr[3] is not present in the array, but if we try to print arr[3] it will give undefined.

        arr[3] = 5;  --It will add the value in 3rd index.
        arr[5] = true; --It will add the value in 5th index, 4td index will remain undefined.
*/


/*      *** Operators ***
        1. Arithmetic
        2. Increment/decrement
        3. Assignment
        4. Comparison
        5. Ternary
        6. Logical
        7. Bitwise

    1. Arithmetic :-
        +, -, *, /, %, **
        ** :- it is used to get power. eg- 2**3 = 8
    

    2. Increment/decrement :-
        ++x : preincrement, first increment the value then use/store.
        x++ : postincrement, first use/store the value then increment.
        --x : predecrement, first decrese the value the use/store.
        x-- : postdecrement, first use/store the value then decrese.


    3. Assignment :-
        let a;
        a = 5; --5 is assigned to a.

        a = a + 5;   =>   a += 5;
        a = a - 5;   =>   a -= 5;
        a = a * 5;   =>   a *= 5;
        a = a / 5;   =>   a /= 5;

   
    4. Comparison :-
        <, >, <=, >=, ==, !=, ===, !==

        == : loose equality, if value is equal then return true otherwise false.
            ex- let a = 1;
                let b = '1';

                (a == b)  o/p- true
                (a === b) o/p- false    // as datatype is not same

        != : is value is not equal then return true otherwise false. Does not care about datatype.
            ex- let a = 1;
                let b = '1';

                (a != b) o/p- false
                (a !== b) o/p- true

        === : strict equality, if datatype and value equal then return true otherwise false
            ex- (5 === 5)  o/p - true
                (5 === 6)  o/p - false

        !== : checks not equal or not
            ex- (5 !== 6)  o/p - true
                (5 !== 5)  o/p - false


    5. Ternary :-
        syntax - (condition) ? value1 : value2;
        If condition is true then value1 otherwise value2.

        ex- let status = (age >= 18) ? 'He Can Vote' : 'He cannot vote';


    6. Logical :-
        With Booleans---
            && : AND operator, If all the condition is true then it return true otherwise false.
            || : OR operator, If atleast one condition is true then it returns true otherwise false.
            !  : NOT operator, reverse the output, true become false, false become true.


        With non-booleans---
            || : Two types of values - truthy and falsey. Falsey : undefined, null, 0, false, NaN(Not a number), ''(empty).
                Short circuiting technique is used in OR, i.e. when it get truthy value it return the value, didn't check further.
                ex- (false || 'soumen')     o/p- soumen
                    (false || 1 || 5)       o/p- 1
                    (false || 5 || 1)       o/p- 5
                    (false || 5 || true)    o/p- 5

            && : If falsey value present then it prints the first falsey value.
                 If falsey value not present then it prints the last truthy value.

                ex- console.log('abc' && 'hg' && true && 'soumen');   o/p- soumen
                    console.log(0 && false && 'abc'&& null);          o/p- 0


    7. Bitwise operator :-
        & : Bitwise AND, only 1&1 = 1, otherwise 0
            ex- 2 & 3
                    2 = 0000...0010
                    3 = 0000...0011
                    ----------------
                        0000...0010 = 2 (ans)

        | : Bitwise OR, only 0|0 = 0, otherwise 1
            ex- 2 | 3
                    2 = 0000...0010
                    3 = 0000...0011
                    ----------------
                        0000...0011 = 3 (ans)
*/


/*      *** Operator Precedence ***
        
*/


/*      *** if-elseif-else ***
        syntax- 
            if(condition1){
                // block of codes
            }else if(condition2){
                // block of codes
            }else{
                // block of codes
            }
*/

/*      *** switch-case ***
        syntax-
            switch(case-number){
                case 1: 
                    //block of codes
                    break;
                case 2:
                        //block of codes
                        break;
                case n:
                    //block of codes
                    break;
                default:
                    //block of codes
            }
*/ 

/*      *** Loop ***
        1. for loop
        2. while loop
        3. do-while loop

        Iterate through object--
        4. for-in loop
        5. for-of loop


    1. for loop :-
        syntax-
            for(initialization; condition; updation){
                //Block of codes
            }

    2. while loop :-
        syntax-
            while(condition){
                //block of codes
                updation
            }

    3. do-while loop :-
        Atleast one time loop runs.
        syntax-
            do{
                //block of codes
                updtion
            }while(condition);


    4. for-in loop :-
        for(let key in objectName){
            //Keys are reflected throgh key variable
            //values are reflected through objectName[key]
            console.log(key, objectName[key]);
        }

    5. for-of loop :-
        can be applicable in iterables : arrays, strings, maps, etc. cannot be used to iterate on objects normally.

        let cars = ['volvo', 'bmw', 'nano'];
        let str = "";
        for(let x of cars){
            str += x;
        }
        console.log(str);       o/p- volvobmwnano


        --Can iterate on objects like-- 
        let person = {
            firstName : 'Soumen',
            lastName : 'Dey',
            age : 24,
        };

        for(let key of Object.keys(person)){
            //Keys are reflected throgh key variable
            console.log(key);
        }

        for(let key of Object.entries(person)){
            //key values are reflected through key variable
            console.log(key);
        }
*/



/*      *** objects ***
    Method :-
        Function written in a object called method.
        ex-
        let person = {
            //property
            firstName : 'Soumen',
            lastName : 'Dey',
            age : 24,

            //behaviour
            draw: function(){           //draw method
                console.log('drawing');
            }
        };
*/

/*      *** Object Creation ***
        1. Factory Function
        2. Constructor Function
    
    1. Factory Function :-
        function createPerson() {
            let person = {
                firstName : 'Soumen',
                lastName : 'Dey',
                age : 24,

                //draw(){
                draw: function(){
                    console.log('drawing');
                }
            };
            return person;
        }

        let person1 = createPerson();
        let person2 = createPerson();
        
        
        function createPerson(name, title, age) {
            return person = {
                firstName : name,
                lastName : title,
                age,        //age : age,

                //draw(){
                draw: function(){
                    console.log('drawing');
                }
            };
        }
        
        let person1 = createPerson('Soumen', 'Dey', 24);
        let person2 = createPerson('Kousik', 'Dey', 27);


    2. Constructor Function :- 
        Pascal Notation is used to give name. This constructor function's by default constructor is Function.

        function CreatePerson(){
            this.firstName = 'Soumen';
            this.lastName = 'Dey';
            this.age = 24;

            this.draw = function(){
                console.log('Drawing');
            }
        }

        let person1 = new CreatePerson();
        let person2 = new CreatePerson();


        function CreatePerson(name, title, age){
            this.firstName = name;
            this.lastName = title;
            this.age = age;

            this.draw = function(){
                console.log('Drawing');
            }
        }

        let person1 = new CreatePerson('Soumen', 'Dey', 24);
        let person2 = new CreatePerson('Kousik', 'Dey', 27);

*/

/*      *** Dynamic Nature of Object ***
    Property can be added and removed from the object.

    ex-
        let person = {
            //property
            firstName : 'Soumen',
            lastName : 'Dey',
            age : 24,
        };

        person.height = 176;    //Property added
        delete person.height;  //Property deleted
*/


/*      *** Constructor Property ***

        function Rectangle(len, bre){
            this.length = len;
            this.breadth = bre;

            this.draw = function(){
                console.log('drawing');
            }
        }

        Above constructor function's constructor is internally defined as --

        let Rectangle = new Function('len', 'bre', 
            `   // codes
            this.length = len;
            this.breadth = bre;

            this.draw = function(){
                console.log('drawing');
            }`
        );

        let obj = new Rectangle(2,3);
        console.log(obj.length);        // o/p- 2
*/


/*      *** Types in JS ***
        1. Premitive  - Copied by their values
        2. Reference  - Copied by their address

       
       1.
        let a = 10;
        fucntion increment(a){      //pass by value
            a++;
        }
        console.log(a);     o/p- 10
        increment(a);
        console.log(a);     o/p- 10
        
        
       2.
        let a = {value=10};
        function increment(a){      //pass by reference
            a.value++;
        }
        console.log(a.value);     o/p- 10
        increment(a);
        console.log(a.value);     o/p- 11
*/


/*      *** Check a property is present or not ***
        let person = {
            firstName : 'Soumen',
            lastName : 'Dey',
            age : 24,
        };

        if('salary' in person){
            console.log('present');
        }else{
            console.log('Absent');
        }
*/


/*      *** Object Clonning ***

        1. Iteration
        2. Assign
        3. Spread

    
    1. Iteration :-

        let person = {
            firstName : 'Soumen',
            lastName : 'Dey',
            age : 24,
        };

        let a = {};

        for(let key in person){
            a[key] = person[key];
        }

        console.log(person.firstName);      o/p- Soumen
        console.log(a.firstName);           o/p- Soumen

    
    2. Assign :-

        let src = {
            a : 10,
            b : 20
        };
        let dest = Object.assign  ({}, src);
        
        
    3. Spread :-

        let src = {
            a : 10,
            b : 20
        };
        let dest = {...src};
*/


/*      *** Getter & setter ***
    
        let person = {
            fName:'',
            lName:'',
            
            //getter
            get fullName(){
                return `${person.fName} ${person.lName}`;
            },

            //setter
            set fullName(value){
                let parts = value.split(' ');
                this.fName = parts[0];
                this.lName = parts[1];
            }
        };

        person.fullName = 'Soumen Dey';
        console.log(person.fullName);

*/





/*      *** Primitive String and String object ***

        let str = 'Soumen';                //String primitive
        let str = new String('Soumen');    //String object

        methods--
            str.includes('subStr');     //used to check if substring present or not
            str.startsWith('subStr');   //used to check if string starts with that substring or not
            str.endsWith('subStr');     //used to check if string ends with that substring or not
            str.toUpperCase();          //convert string to uppercase
            str.toLowerCase();          //convert string to lowercase
            str.trim();                 //used to remove space from string start and end
            str.trimStart();
            str.trimEnd();
            str.replace('from', 'to');  //replace that substring
            str.indexOf('char');
            str.split('basisOf(like space');    //splits the sentence in words
*/


/*      *** Template Literal ***
        let str = 'my name \nis \nsoumen dey';
        // to print that line in new line every time we have to use '\n'. Instead we can use template lateral using backtick (`).

        let str = `my name
                    is
                    soumen dey`;


            Here we can use any variable in between the text dynamically.
            ex- 
            let person = 'Soumen';
            let str = 
            `My name 
            is
            ${person}`;
*/


/*      *** Date ***

        let today = new Date();
        let birthday = new Date('January 23 2001 07:15');
        let birthday = new Date(2001, 0, 23, 10, 0, 0);

        birthday.setFullYear(2000);
        birthday.getDay();
*/


/*      *** Array ***
        -------------

        let arr = [1,2,3,4,5];

    Insertion :-
        arr.push(6);        //insert at end
        arr.unshift(0);     //insert at begin
        arr.splice(index, deleteCount, elements);       //insert in between array
            eg-
                let arr = [1,2,3,4,8,9];
                arr.splice(4, 0,  5,6,7);       o/p- [1,2,3,4,5,6,7,8,9]           


    Searching :-
        Primitive : indexOf, includes
        Objects : find(callback function)


        Primitive : 
            let arr = [1,2,3,4,5];

            console.log(arr.includes(5));       //true
            if(arr.indexOf(5) != -1){           //if the number is not present the it's index will be -1
                console.log('present');         //present
            }

            //We can also start searching from a particular index
            arr.indexOf(element, startingIndex);

        Object :
            let arr = [
                {roll :1, name:'soumen'},
                {roll:2, name:'Somu'}
            ];

            let isPresent = arr.find(function(array){
                return array.roll === 2;
            });

            // let isPresent = arr.find(array => array.roll === 2);

            console.log(isPresent ? 'present' : 'absent');

            
            //If there is no input parameter then arr.find(() => ) is used.
    


    Removing element :-
        From end : arr.pop();
        From beginning : arr.shift();
        from middle : arr.splice(index, noOfElement);
            ex- let arr = [1,2,3,4,5,6];
                arr.splice(2, 3);

                arr = [1,2,6];


    Emptying an array :-
        let numbers = [1,2,3,4,5];
        let numbers2 = numbers;         //As its an object then reference is passed

        Method 1: numbers = [];         //o/p-  numbers = []
                                                numbers2 = [1,2,3,4,5];
        Method 2: numbers.length = 0;   //o/p-  numbers = []
                                                numbers2 = []
        Method 3: numbers.splice(0, numbers.length);     //o/p- numbers = []
                                                                numbers2 = []
        

    Combining Array (On primitive):-
        Using concat --
            let arr1 = [1,2,3];
            let arr2 = [4,5,6];
            
            let arr = arr1.concat(arr2);
            arr = [1,2,3,4,5,6];
            
            
        Using spread operator--
            let arr1 = [1,2,3];
            let arr2 = [4,5,6];
            
            let arr = [...arr1, ...arr2];
            arr = [1,2,3,4,5,6];
            
            //We can also add values in between them
            let arr = [...arr1, 'a', 'true', ...arr2, 'b'];
            arr = [1,2,3,'a','true',4,5,6,'b'];
            



    Slicing array (On primitive):-
        let arr = [1,2,3,4,5,6,7,8];
        
        arr.slice();                //It will copy the entire array         
        let arr1 = arr.slice()  
        arr1 = [1,2,3,4,5,6,7,8]

        arr.slice(index)            //It will slice the array from index to last
        let arr2 = arr.slice(2);
        arr2 = [3,4,5,6,7,8]

        arr.slice(m, n);            //It will slice the array from index m to index (n-1)
        let arr3 = arr.slice(2, 5);
        arr3 = [3,4,5]



    Coping Array :-
        let arr = [1,2,3];

        let arr1 = arr.slice();
        let arr2 = [...arr];



    Iterate through array :-
        1. for-of loop--
            let arr = [1,2,3,4,5];
            for(let value of arr){
                console.log(value);
            }

        2. forEach loop :-
            let arr = [1,2,3,4,5];
            arr.forEach(function(value){
                console.log(value);
            });

            // Can be written as --
            arr.forEach(value => console.log(value));


    Joining Array :-
        Can be joined by using any separator. And it will converted to a String.

        let numbers = [1,2,3];

        let joined = numbers.join(':');
        console.log(joined);    

        o/p-    1:2:3   

    

    Split :-
        Can be used to get words from a given string. It will return a object.
        let sentence = 'My name is soumen';
        let words = sentence.split(' ');

        console.log(words);

        o/p- [ 'My', 'name', 'is', 'soumen' ]




    Reduce :-
        let arr = [1,2,3,4,5];
        
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            // accumulator stpred the total value
            // currentValue give each element of an array one by one
            // last 0 value is the initial value of the accumulator
            // if last 0 is not given then accumulator starts from first element and currentValue start from second element
    
        console.log(sum);       // O/p:- 15



    Sort :-
        Sort the array alphabetically accending order. If sort function used in a array of numbers then it will take each number as string and sort alphabetically.

        1.  let arr = ['xyz', 'pqr', 'abc'];
            arr.sort();
            
            // arr = ['abc', 'pqr', 'xyz']

        2.  let arr = [12, 54, 78, 2112];
            arr.sort();

            // arr = [12, 2112, 54, 78]



    toSorted() :-
        sort the array safely. Create a new sorted array without changing the original array.

        1.  let arr = ['xyz', 'pqr', 'abc'];
            let newArr = arr.toSorted();

            // newArr = ['abc', 'pqr', 'xyz']
            // arr = ['xyz', 'pqr', 'abc']

        2.  let arr = [12, 54, 78, 2112];
            let newArr = arr.toSorted();

            // newArr = [12, 2112, 54, 78]
            // arr = [12, 54, 78, 2112]


    
    Numeric sort :-
        Using compare function we can sort numbers in ascending or descending order.
        
        Ascending order --
            let arr = [12, 2112, 54, 78];
            arr.sort( (a,b) => a-b );

            // arr = [12, 54, 78, 2112]

        
        Descending order --
            let arr = [12, 2112, 54, 78];
            arr.sort( (a,b) => a-b );

            // arr = [2112, 78, 54, 12]

            


    Reverse :-
        Reverse the complete array.

        let num = [1,2,4,3,5,6];
        num.reverse();
        
        // num = [6,5,3,4,2,1]



    toReversed() :-
        toReversed() method as a safe way to reverse an array without altering the original array.

        let num = [1,2,4,3,5,6];
        let arr = num.toReversed();
        
        // arr = [6,5,3,4,2,1]
        // num = [1,2,4,3,5,6]


    Filter :-
        let arr = [1,4,2,-4,-3];

        let newArr = arr.filter(function(value){
            return value>=0;
        });

        // let newArr = arr.filter(value => value>=0);

        // newArr = [1,4,2]



    Find minimum in array :-
        let arr = [3,2,54,12221,65];
        let minimum = Math.min.apply(null,arr);
        console.log(minimum);

        // O/p : 2



    Find Maximum in array :-
        let arr = [3,2,54,12221,65];
        let minimum = Math.max.apply(null,arr);
        console.log(minimum);

        // O/p : 12221



    Map :-
        Maps each element with another items.

        let numbers = [5,6,7,8];
        let items = numbers.map(function(value){
            return 'student' + value;
        })

    
    Mapping with objects :-
        let numbers = [1,2,3,4,5];
        let items = numbers.map(function(num){
            return {value: num};
        })

    

    Chaining :-
        let numbers = [1,2,3,-6,-7];
        let filtered = numbers.filter(value => value >= 0);

        let items = filtered.map(num => {value:num});

        // Can be written in chain
        let items = numbers.filter(value => value >= 0).map(num => {value:num});
*/




/*          *** Functions ***
        A block of codes that fulfils a specific task. Reusable.

    syntax-
        //Function declaration
        function run() {
            //block of codes
        }

        //function call or revoke
        run();      
        
        
        
        // can be called before function declaration because of hoisting.
        eg.     run();
                function run() {
                    //block of codes
                }    
        


    Hoisting :-
        It is the process of moving function declaration to the top file. JS engine done this job automatically.



    Function assignment :-
        Named function assignment --
            let a = function walk(){
                console.log('walking');
            }

            //function call
            a();
            walk();  // Error, can't be called 
    
        Annonymous Function assignment --
            let a = function(){
                console.log('walking');
            }

            //function call
            a();


        //Can't be called before function assignment. i.e. hoising doesn't work here;
        eg.     a();    //error
                let a = function walk(){
                    console.log('walking');
                }




    Dynamic function using arguments :-
        function sum (a, b) {
            return a+b;
        }

        console.log(sum(1,2));            //o/p- 3
        console.log(sum(1,2,3,4,5));      //o/p- 3      //3,4,5 will not be taken




        function sum (a, b) {
            console.log(arguments);
            return a+b;
        }
        sum(1,2,3,4.5);
        o/p- [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4.5 }       //argument object



        function sum () {
            let total = 0;
            for(let value of arguments){
                total += value;
            }
            return total;
        }
        console.log(sum(1,2,3,4.5));        O/p- 15



    Rest parameter :-
        function sum(...args){
            console.log(args);
        }
        sum(1,2,3,4,5);
        O/p- [ 1, 2, 3, 4, 5 ]      //In the form of array



        function sum(a, b, ...args){
            console.log(args);
        }
        sum(1,2,3,4,5);
        O/p - [ 3, 4, 5 ]



        function sum(...args, x){
            console.log(args);
        }
        sum(1,2,3,4,5);    
        O/p- Error




    Default parameter :-
        Default value parameter should be from right side.

        function sum(a,b=20,c=10){
            return a+b+c;
        }
        sum(100,200,300);           //O/p- 600
        sum(100,200);               //O/p- 310
        sum(100);                   //O/p- 130
        sum(100, undefined, 200);   //O/p- 320




    Getter & setter :-
        function FullName(){

        }
*/



/*      *** try catch ***

    try{
        //block of suspected code
    }catch(e){
        //code to execute if errornomous code occur in try block
    }

*/


/*      *** Scope ***
    1.  variable created using 'let' keyword can be accessed only within the block.
    2.  variable created using 'var' keyword can be accessed within the function if it declared under a function and can be accessed throughout the file
        if it is declared outside function.
    3.  constant created using 'const' keyword can be accessed within the block.

*/







/*-----------------------------------------------------------------End------------------------------------------------------------------------------------------*/