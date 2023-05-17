

// console.log(str);
// var str = "hello";
// console.log(str);



// let str = "hello";
// console.log(str);


// console.log(str);
// if (true) {
//     var str = "hello";
// }
// console.log(str);



// if (true) {
//     let str = "hello";
//     console.log(str);
// }
// console.log(str);

//function scope & Function declaration --------------------

// function foo(arg) {
//     if (arg) {
//         var str = "hello";
//     }
//     console.log(str);
// }
// foo(1);
// let a = 5;
// var str1 = "Hi hi"
// console.log(str1);


// foo("Hi", 23);
// function foo(arg) {
//     if (arg) {
//         var str = "hello";
//     }

//     console.log(str);
// }


// var foo = function () {
//     console.log("Hello");
// }
// foo();

//scope chain --- lexical scoping ----------------------------------
// function b() {
//     function a() {
//         console.log(x);
//     }
//     console.log(x);
//     a();
// }
// const x = 20;
// b();


// function a() {
//     const x = 5;

//     console.log(x);
// }
// function b() {
//     const x = 10;
//     a();
// }
// const x = 20;
// b();


// function b() {
//     function a() {
//         if (x == 10) {
//             let x = 15;
//         }
//         console.log(x);
//     }
//     x = 10;
//     a();
// }
// var x = 20;
// b();



// Closure and free variable ---------------------------

// var a = 1;
// let b = 2;

// function outer() {
//     let c = 3;
//     var d = 4;

//     function inner() {
//         let b = 5;
//         let c = 6;

//         console.log(a); // 1
//         console.log(b); // 5
//         console.log(c); // 6
//         console.log(d); // 4
//     }

//     inner();
// }
// outer();


let x = 1;
function foo(y) {
    let inner = function (z) {
        y = 3;
        return x + y + z;
    }
    return inner;
}
let f = foo(2);
console.log(f(5));
console.dir(f);


// const f = 'John';
// function print() {
//     const l = 'Doe';
//     function display(p) {
//         console.log(`${p} from ${f} ${l}`);
//     }
//     return display;
// }
// const func = print();
// func("Hello");
// console.dir(func);



// function cal(type, a, b) {
//     if (type === 'add') {
//         return a + b;
//     } else if (type === 'subtract') {
//         return a - b;
//     }
//     else if (type === 'multiply') {
//         return a * b;
//     }
//     else { return a / b; }
// }
// let four = 4;
// let seven = 7;
// console.log(cal('add', four, seven));


