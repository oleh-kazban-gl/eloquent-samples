/*
Example how to work with separated files in Node.js environment
*/

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.

var data = require('./data.js');

console.log(JSON.parse(data));