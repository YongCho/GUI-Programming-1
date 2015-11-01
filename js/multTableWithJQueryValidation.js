/*
Author: Yong Cho
Email: Yong_Cho@student.uml.edu
Created: 10/31/2015
File Description: JavaScript for assignment 7 page.
*/

"use strict";

// Entry point from the html
function submit() {
  // Beware that the user inputs are of type 'string'.
  var rowStart = document.getElementById("rowStart").value;
  var rowEnd = document.getElementById("rowEnd").value;
  var columnStart = document.getElementById("columnStart").value;
  var columnEnd = document.getElementById("columnEnd").value;

  if ($("#multTableInput").valid())
    generateMultTable(parseInt(rowStart), parseInt(rowEnd), parseInt(columnStart), parseInt(columnEnd));
}

// Removes all cells from the multiplication table.
function clearMultTable() {
  var multTable = document.getElementById("multTable");
  clearTable(multTable);
}

// Removes all cells from a table effectively making the table disappear from the view.
function clearTable(table) {
  while (table.rows.length) {
    table.deleteRow(0);
  }
}

// Clears the existing multiplication table and redraws it using the given number range.
function generateMultTable(rowStart, rowEnd, columnStart, columnEnd) {
  var multTable = document.getElementById("multTable");
  clearTable(multTable);

  var rowCount, reverseRow = false;
  if (rowEnd < rowStart) {
    reverseRow = true;
    rowCount = rowStart - rowEnd + 1;
  } else {
    rowCount = rowEnd - rowStart + 1;
  }

  var columnCount, reverseColumn = false;
  if (columnEnd < columnStart) {
    reverseColumn = true;
    columnCount = columnStart - columnEnd + 1;
  } else {
    columnCount = columnEnd - columnStart + 1;
  }

  var iRow, iCol, row, cell;

  // Top row
  row = multTable.insertRow(0);

  // The top-left cell containing 'X' sign.
  row.insertCell(0).innerHTML = "&times;";

  var rowValue, columnValue;

  // Cells in top row
  columnValue = columnStart;
  for (iCol = 1; iCol <= columnCount; ++iCol) {
    row.insertCell(iCol).innerHTML = columnValue;
    reverseColumn ? --columnValue : ++columnValue;
  }

  // Second through last rows
  rowValue = rowStart;
  for (iRow = 1; iRow <= rowCount; ++iRow) {
    row = multTable.insertRow(iRow);

    // Leftmost cell in the row
    row.insertCell(0).innerHTML = rowValue;

    // The other cells in the row
    columnValue = columnStart;
    for (iCol = 1; iCol <= columnCount; ++iCol) {
      row.insertCell(iCol).innerHTML = rowValue * columnValue;
      reverseColumn ? --columnValue : ++columnValue;
    }

    reverseRow ? --rowValue : ++rowValue;
  }
}

// Draws the default table.
// Installs the event handlers.
$(document).ready(function() {
  var defaultRowStart = 1;
  var defaultRowEnd = 4;
  var defaultColumnStart = 1;
  var defaultColumnEnd = 6;

  // Custom rule to check for a valid integer
  $.validator.addMethod("integer", function(value, element, param) {
    return !isNaN(value) && Math.floor(value) == value;
  })

  // Initializes the jQuery validator for the input form.
  $("#multTableInput").validate({
    rules: {
      rowStart: {
        required: true,
        number: true,
        integer: true,
        range: [-999, 999]
      },
      rowEnd: {
        required: true,
        number: true,
        integer: true,
        range: [-999, 999]
      },
      columnStart: {
        required: true,
        number: true,
        integer: true,
        range: [-999, 999]
      },
      columnEnd: {
        required: true,
        number: true,
        integer: true,
        range: [-999, 999]
      }
    },
    messages: {
      rowStart: {
        number: "Please enter a number between -999 and 999.",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      },
      rowEnd: {
        number: "Please enter a number (1, 2, 3, ...).",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      },
      columnStart: {
        number: "Please enter a number (1, 2, 3, ...).",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      },
      columnEnd: {
        number: "Please enter a number (1, 2, 3, ...).",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      }
    },
    errorElement: "span"
  });

  document.getElementById("rowStart").value = defaultRowStart;
  document.getElementById("rowEnd").value = defaultRowEnd;
  document.getElementById("columnStart").value = defaultColumnStart;
  document.getElementById("columnEnd").value = defaultColumnEnd;

  // Generate a default table.
  generateMultTable(defaultRowStart, defaultRowEnd, defaultColumnStart, defaultColumnEnd);
});
