/**
 * Created by oleh.kazban on 6/12/2015.
 */

function greaterThan(value1) {
  return function greater(value2) {
    return (value1 > value2);
  }
}

var first = greaterThan(10);

console.log(first(20));
