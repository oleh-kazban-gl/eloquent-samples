/*Looping a triangle

Write a loop that makes seven calls to console.log to output the following
triangle:

#
##
###
####
#####
######
#######*/

var triangleSide = '#';

for (var counter = 0; counter < 7; counter++) {
  console.log(triangleSide);
  triangleSide += '#';
}