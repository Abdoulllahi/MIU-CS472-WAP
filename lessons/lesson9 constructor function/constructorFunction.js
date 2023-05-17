// function User(name) {
//     // this = {};	(implicitly)

//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;

//     // return this;	(implicitly)
// }
// let user = new User("Jack");//this
// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
// console.log(user.a)




// function User(firstname, lastname, birthDate) {
//     this.firstname = firstname;
//     this.lastname = lastname; this.birthDate = birthDate;
// }
// let user1 = new User('John', 'Smith', new Date('2000-10-01'));
// let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));


// User.prototype.getFullName = function () {
//     return this.firstname + ' ' + this.lastname;
// }

// User.prototype.getAge = function () {
//     return new Date().getFullYear() - this.birthDate.getFullYear();
// }

// console.log(user1.getFullName()); //John Smith console.log(user1.getAge()); //21



// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// let user1 = new User("Jack");
// let user2 = new User("William");

// console.dir(User)
// // console.dir(User.__proto__);
// // console.dir(User.prototype);


// function Rabbit() { }
// let animal = { eats: true };
// Rabbit.prototype = animal

// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // false

// Array.prototype.getLens = function () {
//     let arr = this;
//     let arrLen = [], i = 0;
//     for (let e of this) {
//         arrLen[i] = e.length;
//         i++
//     }
//     return arrLen

// }
// console.dir(Array.prototype)
// let result = ["hi", "hello"].getLens();
// console.log(result)


function Rabbit(name) { this.name = name }
let rabbit = new Rabbit("John");
console.log(rabbit);

let animal = { eats: true };
Rabbit.prototype = animal;
let rabbitAnimal = new Rabbit("Smith");
console.log(rabbitAnimal.eats);
