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
 /\w/	An alphanumeric character (�word character�)
 /\s/	Any whitespace character
 /./	Any character except newlines
 /\b/	A word boundary
 /^/	Start of input
 /$/	End of input

 */

// Fill in the regular expressions

verify(/ca[rt]/,
  ["my car", "bad cats"],
  ["camper", "high art"]);

verify(/pr?op/,
  ["pop culture", "mad props"],
  ["plop"]);

verify(/ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

verify(/(ious)\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
  ["bad punctuation ."],
  ["escape the dot"]);

verify(/\w{7,}/,
  ["hottentottententen"],
  ["no", "hotten totten tenten"]);

verify(/.../,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
