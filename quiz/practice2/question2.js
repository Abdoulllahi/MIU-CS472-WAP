//Q2: Create a function using function declaration named sum with one parameter of Array type, the returned result is
//the sum of all elements which are greater than 20. sum([10, 20, 50, 30, 8]);
const numbers = [10, 20, 50, 30, 8];
console.log(numbers.filter(number => number > 20)
    .reduce((accumulator, number) => accumulator += number, 0));