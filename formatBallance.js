var number = require('./randomNumber');
var dollar = require('./convertToUSD');

var randomAmount = function(){
    return dollar(number(100, 1000000));
};

var response = function(){
    return "Account balance:\n";
};



module.exports.randomAmount = randomAmount;
module.exports.response = response;