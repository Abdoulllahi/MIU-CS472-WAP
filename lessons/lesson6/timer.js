// function sum(num1, num2) {
//     console.log(num1 + num2);

// }
// setTimeout(sum, 5000, 5, 7);

// let timerId = setTimeout(() => alert("never happens"), 5000);
// alert(timerId); // timer identifier
// // clearTimeout(timerId);
// let a = 0;
// let timerId = setInterval(() => console.log(a++), 2000);
// // after 5 seconds stop
// clearInterval(timerId);
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// setInterval(sum, 1000, 8, 8);

// console.log('start');
// function sum(num1) {
//     console.log(num1 + 1);
//     return num1 + 1;
// }

// const timerId = setInterval(sum, 2000, 1);
// console.log('end');
// console.log(window);


// console.log("start");
// setTimeout(sum, 0, 5, 10);
// console.log("end");

// console.log("start");
// setTimeout(() => console.log("Hello"), 0);
// console.log("end");






// let timerId = setInterval(display, 1000);
// function display() {
//     let d = new Date();
//     document.getElementById('p1').innerHTML = d.getSeconds();

// }

// document.getElementById('btn').addEventListener('click', function () {
//     clearInterval(timerId);
// });


// {
//     // do some job with local variables that should not be seen outside
//     let message = "Hello";
//     alert(message); // Hello
// }
// alert(message); 
"use strict"
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    console.log(x);
    console.log(a);
    var f = function (a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
    var x = 10;
}
c(8, 9, 10);
console.log(b);
console.log(x);
