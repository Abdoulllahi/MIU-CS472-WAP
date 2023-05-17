
// change the background color to red
console.dir(document.getElementById('main').innerHTML);

// console.dir(document.getElementById('main').innerText);
// console.log(document.getElementsByTagName('p')[0]);

// document.body.style.background = "red";
// // change it back after 3 second
// setTimeout(() => document.body.style.background = "", 3000);


// console.log(document.getElementById("main").nodeName);
// console.log(document.getElementById("main").nodeType);
// console.log(document.getElementById("main").innerHTML);
// console.log(document.getElementById("main").innerText);
// console.log(document.getElementsByTagName("p")[2].innerHTML);


// //This example finds the element with id="main", and then finds all <p> elements inside "main":
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");
// console.log(y[0]);
// console.log(y[1]);

// //Finding HTML Elements by CSS Selectors
// console.log(document.querySelectorAll("p#intro")[0]);
// console.log(document.querySelectorAll("p.c1")[1]);
// console.log(document.forms["frm1"]["fname"].value);



// const f1 = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < f1.length; i++) {
//     text += f1.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// //Changing HTML Elements -----------------------------
// document.getElementById("intro").style.color = "blue";

// console.log(document.getElementById("myAttr").getAttribute('isT'));
// document.getElementById("myAttr").setAttribute('isT', 'false');
// console.log(document.getElementById("myAttr").getAttribute('isT'));


//Adding and Deleting Elements ----------------------
// const paraElement = document.createElement("p");
// const textNode = document.createTextNode("This is new.");
// paraElement.appendChild(textNode);

// const element = document.getElementById("main");
// element.appendChild(paraElement);

// element.remove();



//replacing child

// const parent1 = document.getElementById("main");
// const child1 = document.getElementById("p1");
// const para1 = document.createElement("p");
// const node1 = document.createTextNode("This is new.");
// para1.appendChild(node1);
// parent1.replaceChild(para1, child1);


//DOM Navigation----------------------------------------
// console.log(document.body.parentNode);
// console.log(document.body.childNodes);
// console.log(document.body.children);

//console.log(document.getElementById("main").parentNode);
// console.log(document.getElementById("main").childNodes[1].childNodes[0]);
// console.log(document.getElementById("main").childNodes);
// console.log("Sibling: " + document.getElementById("main").previousSibling.nodeName);

// alert(document.body instanceof HTMLBodyElement); // true
// alert(document.body instanceof HTMLElement); // true
// alert(document.body instanceof Element); // true
// alert(document.body instanceof Node); // true
// alert(document.body instanceof EventTarget); // true

// const myCollection = document.getElementsByTagName("p");
// for (let i = 0; i < myCollection.length; i++) {
//     myCollection[i].style.color = "red";
//     // console.log(myCollection[i])
// }


// console.log("Node list");
// const myNodelist = document.querySelectorAll("p");
// for (let i = 0; i < myNodelist.length; i++) {
//     myNodelist[i].style.color = "blue";
//     //  console.log(myNodelist[i]);
// }
// console.log(document.getElementById("intro").nodeName);
// document.getElementById("intro").nodeName = "Hello";
// console.log(document.getElementById("intro").nodeName);
// console.log(document.getElementById("intro").style.color = "blue");



// const myNodelist = document.querySelectorAll("p");
// const myCollection = document.getElementsByTagName("p");

// document.getElementById("addElm").addEventListener("click", (event) => {
//     const para = document.createElement("p");
//     const node = document.createTextNode("This is new.");
//     para.appendChild(node);

//     const element = document.getElementById("main");
//     element.appendChild(para);
// });

// document.getElementById("htmlC").addEventListener("click", (event) => {
//     console.log(myCollection);
// });

// document.getElementById("nodeL").addEventListener("click", (event) => {
//     console.log(myNodelist);
// });

