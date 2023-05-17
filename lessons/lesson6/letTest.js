//console.log(txt);
// if (true) {
//     let txt = "hello";
//     console.log(txt);
// }
// console.log(txt);

// var foo = function () {
//     console.log("Hello");
// }
// foo();
// //console.log(window)
// var funcs = [];
// for (var i = 0; i < 5; i++) {
//     funcs[i] = function () {
//         return i;
//     };
// }
// console.log(funcs[0]);
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());
// console.log('name: ', name) // name: undefined
// console.log('handle: ', handle) // handle: undefined
// console.log('getUser :', getUser) // getUser: ƒ getUser () {}

// var name = 'Tyler'
// var handle = '@tylermcginnis'

// function getUser() {
//     return {
//         name: name,
//         handle: handle
//     }
// }

const gradeReport = { s101: 3, s102: 2, s103: 3 };
function avgGrade(gradeReport) {
    let s = 0, c = 0;
    for (let k in gradeReport) {
        s += gradeReport[k];
        c += 1;
    }
    console.log(s / c);
}
avgGrade(gradeReport)



function sayHi() {
    alert("Hi");
}
console.log(sayHi);