/**
 * Censored keyboard
 * Between 1928 and 2013, Turkish law forbade the use of the letters Q, W, and X
 * in official documents. This was part of a wider initiative to stifle Kurdish
 * culture—those letters occur in the language used by Kurdish people but not
 * in Istanbul Turkish.
 * As an exercise in doing ridiculous things with technology, I’m asking you to
 * program a text field (an <input type="text"> tag) that these letters cannot
 * be typed into.
 * (Do not worry about copy and paste and other such loopholes.)
 */

function parseKeyboardInput() {
  var field = document.querySelector("input");

  field.addEventListener('keydown', function(event) {
      console.log(event + ' : ' + event.keyCode + ' : ' + String.fromCharCode(event.keyCode));
  });

  field.addEventListener('keyup', function(event) {
    if ((event.keyCode === 81 && event.shiftKey) ||
      (event.keyCode === 87 && event.shiftKey) ||
      (event.keyCode === 88 && event.shiftKey)) {
      console.log('Nope :)');

      field.value = replaceLastChar(field.value);
    }
  });

  /**
   * Function is used for trim out last character from String input
   * @param (string) - String to be trimmed
   */

  function replaceLastChar(string) {
    return string.substring(0, string.length - 1)
  }
}

parseKeyboardInput();