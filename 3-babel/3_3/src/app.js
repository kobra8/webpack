require('core-js/fn/promise');

var promise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'test');
});

promise.then(function(resp) {
    console.log(resp);
});