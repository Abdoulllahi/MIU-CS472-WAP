function sum(num1, num2) {
    console.log(num1 + num2);

}
// setTimeout(sum, 5000, 5, 7);


// setTimeout(sum, 2000, 4, 7);
//setTimeout(sum(4, 7), 2000);


// console.log("start");
// setTimeout(sum, 0, 5, 10);
// console.log("end");

// console.log("start");
// setTimeout(() => console.log("Hello"), 0);
// console.log("end");


// setInterval(sum, 1000, 8, 8);

// console.log('start');
// function sum(num1) {
//     console.log(num1 + 1);
//     return num1 + 1;
// }

// const timerId = setInterval(sum, 2000, 1);
// console.log('end');



let timerId = setInterval(display, 1000);
function display() {
    let d = new Date();
    document.getElementById('p1').innerHTML = d.getSeconds();

}

document.getElementById('btn').addEventListener('click', function () {
    clearInterval(timerId);
});
