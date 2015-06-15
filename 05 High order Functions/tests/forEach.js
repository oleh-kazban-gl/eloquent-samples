/**
 * Created by oleh.kazban on 6/12/2015.
 */

function forEach(array, action) {
  for (var count = 0; count < array.length; count++) {
    action(array[count]);
  }
}

// simple print giving array to console
forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log);

 //calling function with array as an argument, and as other function as second
 //argument
var numbers = [1,2,3,4,5];
var sum = 0;

forEach(numbers, function(number) {
  sum += number;
});

console.log(sum);
