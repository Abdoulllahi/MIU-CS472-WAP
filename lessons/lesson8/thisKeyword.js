

//global context this referes to the global object ---------------------
// console.log(this);
// console.log(window === this);


// var aStr = 10;
// console.log(aStr);
// console.log(this);

//inside a function, the value of this depends on hot the function is called.------------------
// in strict mode, this remains as undefined
// Not in strict mode, this will be window

//"use strict";
// function foo() {
//     console.log(this);
// }
// foo();

// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(this)
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
// user.sayHi(); //works
// setTimeout(user.sayHi, 2000); //problem!

// let user = {
//     name: "John"
// }
// let car = {
//     name: "Honda",
//     display(arg) {
//         console.log(this.name, arg);
//     }
// }
// function display(arg) {
//     console.log(this.name, arg);
// }

// car.display.call(user, 15);
// car.display.apply(user, [15]);


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
//             // error – ‘this’ is undefined (or window)
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


function foo(a, b) {
    //  this
    console.log(`this keyowrd:`, this);
    console.log(a, b);
}
// console.log(Function.prototype); // is the parent for all functions
foo.call("Hello", 2, 3);
foo.apply({ x: 1, y: 2 }, [5, 7]);
foo.bind(1, 2, 3)(); // foo.bind(1)(2,3);




// user.printName();

// let user2 = {
//     firstName: "Anna",
//     lastName: "Karry",
// }
// user.printName.call(user2);
// user.printName.apply(user2);
// user.printName.bind(user2)(); //bind: doesn't execute the function, it returns the function

let user = {
    firstName: "John",
    lastName: "Doe",
    printName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

setTimeout(user.printName, 2000); //passed the function reference, this is lost
setTimeout(user.printName(), 2000); //callback must be a function. undefined

// //1.wrapper --------------
setTimeout(() => user.printName(), 2000);
setTimeout(function () { user.printName(); }, 2000);

// //2. bind
setTimeout(user.printName.bind(user), 2000);

// //3. wrapper + call
setTimeout(() => user.printName.call(user), 2000);


// //4. wrapper + apply
setTimeout(() => user.printName.apply(user), 2000);

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

