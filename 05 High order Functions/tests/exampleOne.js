/**
 * Created by oleh.kazban on 6/12/2015.
 */

// Playing with args

function exampleOne(f) {
  return function exampleTwo(arg) {
    console.log('Running with args: ' + arg);
    var value = f(arg);
    console.log('Running with args: ' + arg + ' value: ' + value);
    return value;
  }
}

exampleOne(Boolean)(1);