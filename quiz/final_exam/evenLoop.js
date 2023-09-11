console.log('start');
process.nextTick(() => console.log('This is process.nextTick 1'));
setTimeout(() => console.log('This is setTimeout 1'), 0);
process.nextTick(() => console.log('This is process.nextTick 2'));
setImmediate(() => console.log('This is setImmediate'));
setTimeout(() => console.log('This is setTimeout 2'), 0);
process.nextTick(() => console.log('This is process.nextTick 3'));
let promise = new Promise((resolve, reject) => {
    console.log('It is executor');
    resolve('ok');
});
promise.then((result) => console.log('This is promise => ' + result));
console.log('end') 