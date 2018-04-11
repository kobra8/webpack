
const promiseTransform = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'transform-runtime');
});

promiseTransform.then(resp => console.log(resp));