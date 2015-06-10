// "Pyramid" drawings

// dimension - the value of basis width
var dimension = 5;
var row = '';

var whiteCell = '0';
var blackCell = '*';

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

console.log(row);