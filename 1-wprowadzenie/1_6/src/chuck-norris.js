var Chuck  = require('chucknorris-io');
var client = new Chuck();
 
// Retrieve a random chuck joke
client.getRandomJoke().then(function (response) {
    // do stuff here
    console.log(response.value);
}).catch(function (err) {
    // handle error
    console.error(err);
});