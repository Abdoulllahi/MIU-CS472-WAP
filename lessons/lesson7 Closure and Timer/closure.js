//calling inner function
// function init() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name); //like in Java, nested functions have access to variables declared in their outer scope
//     }
//     displayName();
//     console.dir(displayName);
// }
// init();

//Returning an inner function
// function makeFunc() {
//     const name = "Mozilla"; //local to makeFunc
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc();
// myFunc();
// console.dir(myFunc);
// Q:is the local variable still accessible by myFunc?
// A: yes.	Example of saving local state inside a JavaScript closure.

// let a = 1;
// function foo() {
//     let y = 2;

//     function bar() {
//         let z = 3;

//         function baz() {
//             let w;
//             console.log(z);
//             console.log(y);
//             console.log(a);
//             // console.log(w);
//         }
//         baz();
//         console.dir(baz)
//     }
//     bar();
// }
// foo();


// global scope
// const e = 10;
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             // outer functions scope
//             return function (d) {
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }
// console.dir(sum(1)(2)(3));
// console.log(sum(1)(2)(3)(4)); // 20


// const x = 1;
// function f() {
//     let y = 2;
//     const sum = function () {
//         const z = 3;
//         console.log(x + y + z);
//     }
//     y = 10;
//     return sum;
// } //end of f

// const g = f();
// g();
// console.dir(g);


// var funcs = [];
// for (var i = 0; i < 2; i++) {
//     funcs[i] = function () {
//         return i;
//     };
//     // console.dir(funcs[i]);
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(window);

// var funcs = [];
// for (let i = 0; i < 2; i++) {
//     funcs[i] = function () {
//         return i;
//     };
//     console.dir(funcs[i]);
// }

// console.log(funcs[0]());
// console.log(funcs[1]());


var helper = function (n) {
    return function () { return n; }
}
var funcs = [];
for (var i = 0; i < 2; i++) {
    funcs[i] = helper(i);
};
console.log(funcs[0]());
console.log(funcs[1]());
