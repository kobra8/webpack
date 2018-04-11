var $ = require('jquery');
var calc = require('./calc.js');

calc.sum(2, 4);
calc.sum(4, 4);
calc.print();

var form = $('form');
form.on('submit', function(event) {
    event.preventDefault();

    var num1 = form.find('.num1').val();
    var num2 = form.find('.num2').val();

    var result = calc.sum(Number(num1), Number(num2));

    form.find('.result').val(result);
    
    calc.print();
})