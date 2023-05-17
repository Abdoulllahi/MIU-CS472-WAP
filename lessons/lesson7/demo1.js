function sum(num1, num2){
    console.log(this);
    console.log(num1 + num2);
}

// sum(1, 2);
const obj1 = {x:1};
const obj2 = {firstname: 'John'};

sum.call();
sum.apply();
// sum.call(obj1);
// sum.apply(obj2);