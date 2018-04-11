module.exports = (function () {

    var operations = [];

    var calc = {
        sum: function (a, b) {
            var result = a + b;

            operations.push(a + ' + ' + b + ' = ' + result);
        },

        print: function () {
            console.log(operations);
        },
    }

    return calc;

})();