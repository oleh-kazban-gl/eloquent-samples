/**
 * Write a function buildTable that, given an array of objects that all have the
 * same set of properties, builds up a DOM structure representing a table. The
 * table should have a header row with the property names wrapped in <th> elements
 * and should have one subsequent row per object in the array, with its property
 * values in <td> elements.

 * The Object.keys function, which returns an array containing the property names
 * that an object has, will probably be helpful here.
 * @param(structure) - Array of Objects that represent an Table structure
 */

function buildTable(structure) {
  var div = document.getElementById('tablePlaceHolder');

  var table = addTable(div);

  for (var i = 0; i < structure.length; i++) {
    var rowObject = structure[i];

    for (var rowProperty in rowObject) {
      if (rowObject.hasOwnProperty(rowProperty)) {
        if (rowProperty === 'caption') {
          addCaption(table, rowObject[rowProperty]);
        } else if (rowProperty === 'th' || rowProperty === 'tr') {
          addRow(table, rowObject[rowProperty], rowProperty);
        }
      }
    }
  }

  reAlign();

  /**
   * Function places a table tags <table></table> in placeholder
   * @param (placeholder) - tag where table be placed
   */

  function addTable(placeholder) {
    var table = document.createElement('table');
    placeholder.appendChild(table);

    return table;
  }

  /**
   * Function creates Caption for Table
   * @param (table) - target Table
   * @param (caption) - caption of Table
   */

  function addCaption(table, caption) {
    var tableCaption = document.createElement('caption');
    var tableCaptionText = document.createTextNode(caption);

    tableCaption.appendChild(tableCaptionText);
    table.appendChild(tableCaption);
    console.log('adding a caption: ' + caption);
  }

  /**
   * Function creates Row and populate it by Cells
   * @param (table) - target Table
   * @param (rowCells) - Array of Row Cells
   * @param (type) - String, type of Cell - 'th' or 'td'
   */

  function addRow(table, rowCells, type) {
    var row = document.createElement('tr');

    for (var count = 0; count < rowCells.length; count++) {
      var cell;

      if (type === 'th') {
        cell = document.createElement('th');
      } else if (type === 'tr') {
        cell = document.createElement('td');
      }

      var cellText = document.createTextNode(rowCells[count]);

      if (!isNaN(parseInt(rowCells[count]))) {
        cell.setAttribute('data-height', 'right');
      }

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    table.appendChild(row);
    console.log('adding a table row: ' + rowCells);
  }

  /**
   * Function realign cells with numbers
   */

  function reAlign() {
    var cells = document.getElementsByTagName('td');

    Array.prototype.forEach.call(cells, function (cell) {
      if (cell.getAttribute('data-height') == 'right') {
        cell.style.textAlign = 'right';
      }
    });
  }
}
