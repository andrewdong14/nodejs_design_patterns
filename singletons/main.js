/*
It does not matter how many times you will require this module in your application; it will only exist as a single instance.
Because of this behaviour of require, singletons are probably the most common Node.js design patterns among the modules in NPM.
*/
var areaCalc = require('./area');

console.log(areaCalc.circle(5)); 