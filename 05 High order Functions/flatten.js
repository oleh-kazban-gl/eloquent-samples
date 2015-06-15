/*
 Flattening

 Use the reduce method in combination with the concat method to “flatten” an
 array of arrays into a single array that has all the elements of the input
 arrays.
 */

function reduce(array, combine, start) {
  var current = start;

  for (var count = 0; count < array.length; count++) {
    current = combine(current, array[count]);
  }

  return current;
}

var array = [[1, 2, 3], [4, 5], [6]];

console.log(reduce(array, function(left, right) {
  var concat = [];

  for (var count = 0; count < left.length; count++) {
    concat.push(left[count]);
  }

  for (var count = 0; count < right.length; count++) {
    concat.push(right[count]);
  }

  return concat;
}, 0));

console.log(array.reduce(function (left, right) {
  return left.concat(right);
}, []));
