require('babel-polyfill');

const promise = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'promise'));

promise.then(resp => console.log(resp));

class MyClass {
    myVar = 'value'
}