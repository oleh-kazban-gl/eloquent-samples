/**
 * Created by oleh.kazban on 6/12/2015.
 */

//Playing with custom control flow

function unless(condition, than) {
  if (!condition) {
    than();
  }
}

function repeat(quantity, body) {
  for (var i = 0; i <= quantity; i++) {
    body(i);
  }
}

repeat(10, function(number) {
  unless(number % 2, function() {
    console.log(number + ' is even');
  });
});