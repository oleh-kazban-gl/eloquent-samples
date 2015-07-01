var depOne = require('./depOne');

module.exports = 'I am a mainDep -> depOne: ' + depOne;

console.log(module.exports);
