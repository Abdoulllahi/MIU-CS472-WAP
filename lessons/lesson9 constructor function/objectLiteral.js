// // let animal = {
// //     eats: true
// // };
// // let rabbit = {
// //     jumps: true
// // };
// // rabbit.__proto__ = animal;
// // // console.log("animal", animal)
// // // console.log("rabbit", rabbit)
// // console.log(rabbit.__proto__)

// // let animal = { eats: true };
// // let rabbit = Object.create(animal);
// // rabbit.jumps = true;
// // console.log(rabbit.eats);
// // console.log(rabbit.jumps);



// // let animal = {
// //     eats: true,
// //     walk: function () { alert("Animal walk"); }
// // };

// // let rabbit = Object.create(animal);
// // rabbit.jumps = true;
// // let longEar = Object.create(rabbit);
// // longEar.earLength = 10;
// // longEar.walk();

// // console.log("animal", animal)
// // console.log("rabbit", rabbit)
// // console.log("longEar", longEar)
// // let animal = {
// //     eats: true
// // };
// // let rabbit = Object.create(animal);
// // rabbit.jumps = true;

// // // Object.keys only return own keys
// // // console.log(Object.keys(rabbit));	// jumps

// // // for..in loops over both own and inherited keys
// // for (let prop in rabbit) console.log(prop);

// let head = {
//     glasses: 1
// };

// let table = Object.create(head);
// table.pen = 3;

// let bed = Object.create(table);
// bed.sheet = 1
// bed.pillow = 2


// let pockets = Object.create(bed);
// pockets.money = 2000;

// console.log("expect 3: ", pockets.pen);
// console.log("expect 1: ", bed.glasses);
