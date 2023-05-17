
//global context this referes to the global object ----------------------
// console.log(this);
// console.log(window === this);


// var aStr = 10;
// let bStr = 20;
// console.log(aStr);
// console.log(this);

//regular function ------------------------------------------------------
// in strict mode, this remains as undefined
// in normal mode, this will be window

// "use strict";
// function greet() {
//     console.log("hello");
//     console.log(this);
// }
// greet();


//method call --------------------------------------------------------------
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
// user.sayHi(); //works


// let anotherUser = {
//     firstName: "Anna"
// }
// anotherUser.sayHi = user.sayHi;
// anotherUser.sayHi();
// user.sayHi();
// "use strict"
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(this) //user
//         console.log(`Hello, ${this.firstName}!`);
//         function inner() {
//             console.log(this);//window or undefined
//             console.log(`Hello, ${this.firstName}!`); //undefined or window
//         }
//         inner();
//     }
// };
// user.sayHi(); //works


//arrow function ---------------------------------------------------------------------

// let x = (a) => {
//     s = 15;
//     var s = "hello";
//     let d = 5;
//     console.log(this);//window
//     console.log(a);
//     console.log(arguments);

// }
// x(68);


// let x = function (a) {
//     s = 15;
//     var s = "hello";
//     let d = 5;
//     console.log(this);
//     console.log(a);
//     console.log(arguments);
// }
// x(68);


// let user1 = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)
//         console.log(`Hello, ${this.firstName}!`);
//     },
//     greet: () => { //parent scope of greet method is global scope
//         console.log("from arraw function " + this);
//         console.log('Hi' + this.firstName);
//     }
// };
// user.sayHi();
// user1.greet();


//regular function inside of method -------------------------------------
// let user = {
//     firstName: "John",
//     sayHi() {
//         // console.log(this)
//         // console.log(`Hello, ${this.firstName}!`);
//         function inner() {
//             console.log(`Hello, ${this.firstName}!`);
//         }
//         inner();
//     }
// };
// user.sayHi(); //works


// let user = {
//     firstName: "John",
//     sayHi() {
//         // console.log(this)
//         // console.log(`Hello, ${this.firstName}!`);
//         // solution1:
//         // let self = this;
//         // function inner() {
//         //     console.log(`Hello, ${self.firstName}!`);
//         // }
//         // inner();
//         // //solution 2:
//         let inner = () => {
//             console.log(`Hello, ${this.firstName}!`);
//         }
//         inner();
//     }
// }
// user.sayHi(); //works







// let user = {
//     name: "John"
// }

// let anotherUser = {
//     name: "Anna"
// }

// function display(arg) {//15
//     console.log(this.name, arg);//this => user
// }
// display("Hello");


// display.call(user, 15);//this = user
// display.call(anotherUser, 20);

// let car = {
//     name: "car name",
//     model: "car model"
// }

// display.call(car, 85)

// display.apply(user, [15]);


// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;
//             console.log(this);
//         };
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour??
//     }
// };

// user.greet(); //Hello	Hello	??

// const user = {
//     salute: "",
//     greet: function () {
//         const self = this;
//         self.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function (newSalute) { //inner function
//             self.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour
//     }
// };

// user.greet(); //Hello Bonjour

// const user = {
//     salute: "",
//     greet: function () {

//         self.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = (newSalute) => { //inner function
//             this.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour
//     }
// };

// user.greet(); //Hello Bonjour


// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList: function () {
//         this.students.forEach((student) => {

//             // console.log(this)
//             console.log(this.title + ": " + student);
//         });
//     }
// };
// group.showList();






//to invoke a function in JS, there are 3 ways:
// foo(5, 7);



// const x = { a: 1, b: 2, add() { return this.a + this.b } }
// console.log(x.add()); //3

// const y = { a: 1, b: 2, add: () => { console.log(this) } }
// console.log(y.add());


// function foo(a, b) {
//     //  this
//     console.log(`this keyowrd:`, this);
//     console.log(a, b);
// }

// foo.call("Hello", 2, 3);
// foo.apply({ x: 1, y: 2 }, [5, 7]);
// foo.bind(1, 2, 3)(); // foo.bind(1)(2,3);




// user.printName();

// let user2 = {
//     firstName: "Anna",
//     lastName: "Karry",
// }
// user.printName.call(user2);
// user.printName.apply(user2);
// user.printName.bind(user2)(); //bind: doesn't execute the function, it returns the function

// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     printName(arg1, arg2) {
//         console.log(`${this.firstName} ${this.lastName}`, arg1, arg2);
//     }
// }

// let admin = {
//     firstName: "Anna",
//     lastName: "Smith"
// }

// user.printName.call(admin, 5, 7);
// user.printName.apply(admin, [5, 7]);

// let d = user.printName.bind(admin, 8, 9);
// d();
// console.log(d);




// setTimeout(user.printName, 2000); //passed the function reference, this is lost
// setTimeout(user.printName(), 2000); //callback must be a function. undefined

// // //1.wrapper --------------
// setTimeout(() => user.printName(), 2000);
// setTimeout(function () { user.printName(); }, 2000);

// // //2. bind
// setTimeout(user.printName.bind(user), 2000);

// // //3. wrapper + call
// setTimeout(() => user.printName.call(user), 2000);


// // //4. wrapper + apply
// setTimeout(() => user.printName.apply(user), 2000);

// let user = {
//     firstName: "John",
//     sayHi() {
//         alert(`Hello, ${this.firstName}!`);
//     }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// // can run it without an object
// sayHi(); // Hello, John!

// setTimeout(sayHi, 1000); // Hello, John!

// // even if the value of user changes within 1 second
// // sayHi uses the pre-bound value which is reference to the old user object
// user = {
//     sayHi() { alert("Another user in setTimeout!"); }
// };
// let puppies = ["hello", 'hi'];
// var chewToys = puppies.map(puppy => { });   // BUG!
// console.log(chewToys);
// var chewToys = puppies.map(puppy => ({})); // ok
// console.log(chewToys);


const user = {
    salute: "",
    greet: function () {
        this.salute = "Hello";//user
        //  let self = this;
        console.log(this.salute); //Hello
        const setFrench = (newSalute) => { //inner function 
            this.salute = newSalute;//window
            console.log(window);
        };
        setFrench("Bonjour");
        console.log(this.salute); //user
    }
};

user.greet(); //Hello	Hello	??
