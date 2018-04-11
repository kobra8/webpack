var operations = [];

var calc = {
    sum: function(a, b) {
        var result = a + b;

        operations.push(a + ' + ' + b + ' = ' + result);

        return result;
    },

    print: function() {
        console.log(operations);
    }
}

module.exports = calc;