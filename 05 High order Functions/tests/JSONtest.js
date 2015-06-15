/**
 * Created by oleh.kazban on 6/12/2015.
 */

var user1 = {
  firstName: 'Oleg',
  middleName: '',
  lastName: 'Kazban',
  birthDay: 20,
  birthMonth: 'september',
  birthYear: 1980,
  sex: 'male'
}
var user2 = {
  firstName: 'Anton',
  middleName: '',
  lastName: 'Gavrilov',
  birthDay: 21,
  birthMonth: 'august',
  birthYear: 1984,
  sex: 'male'
}
var user3 = {
  firstName: 'Ivan',
  middleName: '',
  lastName: 'Ivanov',
  birthDay: 10,
  birthMonth: 'march',
  birthYear: 1975,
  sex: 'male'
}
var user4 = {
  firstName: 'Anna',
  middleName: '',
  lastName: 'Petrova',
  birthDay: 4,
  birthMonth: 'january',
  birthYear: 1990,
  sex: 'female'
}
var user5 = {
  firstName: 'Olga',
  middleName: '',
  lastName: 'Sidorova',
  birthDay: 29,
  birthMonth: 'february',
  birthYear: 1983,
  sex: 'female'
}

var JSONusers = '[\n  ' + [
    '{"firstName":"Oleg","middleName":"","lastName":"Kazban","birthDay":20,"birthMonth":"september","birthYear":1980,"sex":"male"}',
    '{"firstName":"Anton","middleName":"","lastName":"Gavrilov","birthDay":21,"birthMonth":"august","birthYear":1984,"sex":"male"}',
    '{"firstName":"Ivan","middleName":"","lastName":"Ivanov","birthDay":10,"birthMonth":"march","birthYear":1975,"sex":"male"}',
    '{"firstName":"Anna","middleName":"","lastName":"Petrova","birthDay":4,"birthMonth":"january","birthYear":1990,"sex":"female"}',
    '{"firstName":"Olga","middleName":"","lastName":"Sidorova","birthDay":29,"birthMonth":"february","birthYear":1983,"sex":"female"}'
  ].join(',\n  ') + '\n]';

var users = [];

var userToString = JSON.stringify(user1);
var stringToUser = JSON.parse(userToString);

var userToString1 = JSON.stringify(user1);
var userToString2 = JSON.stringify(user2);
var userToString3 = JSON.stringify(user3);
var userToString4 = JSON.stringify(user4);
var userToString5 = JSON.stringify(user5);

users.push(userToString1, userToString2, userToString3, userToString4, userToString5);

function filter(array, test) {
  var filtered = [];

  for (var count = 0; count < array.length; count++) {
    if (test(array[count])) {
      filtered.push(array[count]);
    }
  }

  return filtered;
}

function map(array, transform) {
  var mapped = [];

  for (var count = 0; count < array.length; count++) {
    mapped.push(transform(array[count]));
  }

  return mapped;
}

function reduce(array, combine, start) {
  var current = start;

  for (var count = 0; count < array.length; count++) {
    current = combine(current, array[count]);
  }

  return current;
}

function resultQuerySize(array) {
  return array.length;
}

// data compose
// age
function age(user) {
  return 2015 - user.birthYear;
}
// males
function male(user) {
  return user.sex === 'male';
}
// females
function female(user) {
  return user.sex = 'female';
}

function average(array) {
  function plus (a, b) {
    return a + b;
  }

  return array.reduce(plus) / array.length;
}

//print our user Object
console.log(user1);
//print our user Object as JSON string
console.log(userToString);

console.log(userToString1 + '\n' +
  userToString2 + '\n' +
  userToString3 + '\n' +
  userToString4 + '\n' +
  userToString5);
//print our user Object as an Object, parsed from String
console.log(stringToUser);
//how many users are in our JSON record?
console.log(users.length);
//get our storage
console.log(users);
//what is the last name (family name) of the user in first record
console.log(JSON.parse(users[0]).lastName);

var parsedUsers = JSON.parse(JSONusers);

//let's filter our storage for user's older than 1983 year of birth
console.log(filter(parsedUsers, function (user) {
  return user.birthYear <= 1983;
}));

//let's see how many results are filtered
console.log(resultQuerySize(filter(parsedUsers, function (user) {
  return user.birthYear <= 1983;
})));

//let's see who from users has first name Oleg
console.log(filter(parsedUsers, function (user) {
  return user.firstName == 'Oleg';
}));

//let's map by last name and output those users who are younger than 1980 year
var overEigthty = parsedUsers.filter(function (user) {
  return user.birthYear >= 1980;
});
console.log('mapping');
console.log(map(overEigthty, function (user) {
  return user.lastName;
}));

// reduce testing
var reduceArray = [1, 2, 3, 4, 5];
console.log(reduce(reduceArray, function (a, b) {
  return a + b;
}, 0));

//let's reduce our users to some age, for example the oldest
console.log(reduce(parsedUsers, function (min, max) {
  if (min.birthYear < max.birthYear) {
    return min;
  } else {
    return max;
  }
}, 0));

console.log(average(parsedUsers.filter(male).map(age)));
console.log(average(parsedUsers.filter(female).map(age)));




