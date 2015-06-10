// "Fir-tree" drawings

// dimension - the value of basis width
// logs - how much "pyramids" of leaves have to draw

var dimension = 5;
var logs = 2;
var row = '';

var whiteCell = ' ';
var blackCell = '*';

for (var logCounter = 0; logCounter < logs; logCounter++) {
  for (var countX = Math.floor(dimension / 2); countX < dimension; countX++) {
    for (var countY = 0; countY < dimension; countY++) {
      if ((countX + countY + 1) >= dimension && (countX - countY) >= 0) {
        row += blackCell;
      } else {
        row += whiteCell;
      }
    }
    row += '\n';
  }
}

console.log(row);