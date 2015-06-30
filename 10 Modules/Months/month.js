//Month module

var names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

module.exports = {
  name: function(monthNumber){
    return names[monthNumber];
  },
  number: function(monthName){
    return names.indexOf(monthName);
  }
};
