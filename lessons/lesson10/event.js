// let div = document.getElementById("myDiv");
// let p = document.getElementById("myP");
// let span = document.getElementById("mySpan");

// function setDiv(event) {
//     console.log("div");
// }
// function setP(event) {
//     console.log('p');

// }
// function setSpan(event) {
//     //  event.stopPropagation();
//     // event.stopImmediatePropagation();
//     console.log("span");
// }
// function setSpan1(event) {
//     console.log("span1");
// }

div.addEventListener('click', setDiv, true);// // true - caturing, false - bubbling
p.addEventListener('click', setP, false);
span.addEventListener('click', setSpan, true);
span.addEventListener('click', setSpan1);

document.getElementById("frm1").addEventListener("submit", (event) => {
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    document.getElementById("output").innerHTML = fname + " " + lname;
});


