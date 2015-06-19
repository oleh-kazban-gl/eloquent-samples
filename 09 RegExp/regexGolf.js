/*
 Regexp golf

 Code golf is a term used for the game of trying to express a particular program
 in as few characters as possible. Similarly, regexp golf is the practice of
 writing as tiny a regular expression as possible to match a given pattern, and
 only that pattern.

 For each of the following items, write a regular expression to test whether any
 of the given substrings occur in a string. The regular expression should match
 only strings containing one of the substrings described. Do not worry about
 word boundaries unless explicitly mentioned. When your expression works, see
 whether you can make it any smaller.

 car and cat
 pop and prop
 ferret, ferry, and ferrari
 Any word ending in ious
 A whitespace character followed by a dot, comma, colon, or semicolon
 A word longer than six letters
 A word without the letter e

 /abc/	A sequence of characters
 /[abc]/	Any character from a set of characters
 /[^abc]/	Any character not in a set of characters
 /[0-9]/	Any character in a range of characters
 /x+/	One or more occurrences of the pattern x
 /x+?/	One or more occurrences, nongreedy
 /x* /	Zero or more occurrences
 /x?/	Zero or one occurrence
 /x{2,4}/	Between two and four occurrences
 /(abc)/	A group
 /a|b|c/	Any one of several patterns
 /\d/	Any digit character
 /\w/	An alphanumeric character (“word character”)
 /\s/	Any whitespace character
 /./	Any character except newlines
 /\b/	A word boundary
 /^/	Start of input
 /$/	End of input

 */

//car and cat
checkRegexp('car or cat not camper camera art', function (word) {
  return /ca[rt]/.test(word);
});

//pop and prop
checkRegexp('pop and prop not potop', function (word) {
  return /pr?op/.test(word);
});

//ferret, ferry, and ferrari
checkRegexp('ferret ferry and ferrari not ferrum', function (word) {
  return /ferr(et|y|ari)/.test(word);
});

//Any word ending in ious
checkRegexp('abstemious abstentious acrimonious adscititious ' +
            'abstem abstent acrimon adscitit' +
            'abiousstem absioustent aciousrimon adsciousitit',
            function (word) {
  return /(ious)\b/.test(word);
});

//A whitespace character followed by a dot, comma, colon, or semicolon
checkRegexp('ferret , ferry . and : ferrari ; not ferrum', function (word) {
  return /\s(,|\.|:|;)/.test(word);
});

//A word longer than six letters
checkRegexp('one two three four twelve hundred billions blablablabla',
            function (word) {
  return /\w{7,}/.test(word);
});

//A word without the letter e
checkRegexp('one two three four twelve hundred billions blablablabla',
            function (word) {
  return /\b[a-df-z]+\b/.test(word);
});

function checkRegexp(string, expression) {
  var words = string.split(' ');

  console.log('input: ' + string);
  console.log('RegExp: \n' + expression.toString() + '\noutput:');

  for (var word = 0; word < words.length; word++) {
    var result = expression(words[word]);
    console.log(words[word] + ' : ' + result);
  }

  console.log('--------------------------------------------------------------');
}