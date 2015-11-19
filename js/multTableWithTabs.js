/*
Author: Yong Cho
Email: Yong_Cho@student.uml.edu
Created: 11/10/2015
File Description: JavaScript for assignment 8 page.
*/

"use strict";

var nextTabId = 1;

// Entry point from the html
function submit() {
  // Beware that the user inputs are of type 'string'.
  var rowStart = document.getElementById("rowStart").value;
  var rowEnd = document.getElementById("rowEnd").value;
  var columnStart = document.getElementById("columnStart").value;
  var columnEnd = document.getElementById("columnEnd").value;

  if ($("#multTableInput").valid()) {
    var table = generateMultTable(parseInt(rowStart), parseInt(rowEnd), parseInt(columnStart), parseInt(columnEnd));
    var tabId = addTab(table, generateTabLabel(rowStart, rowEnd, columnStart, columnEnd));
  }
}

// Adds a new tab and places the table object in the new tab's contents area.
function addTab(table, label) {
  var id = "tab-" + nextTabId;
  var panelId = "tab-panel-" + nextTabId;

  $("#tabs > div.panelContainer").append("<div id=\"" + panelId + "\"></div>");
  $("#tabs ul").append("<li id=\"" + id + "\"><a href=\"#" + panelId + "\"><div>" + label + "</div></a><img src=\"img/closetab.png\" class=\"ui-icon ui-icon-close\" role=\"presentation\"></li>");
  
  $("#tabs").tabs("refresh");

  $("#" + panelId).empty();
  $("#" + panelId).append($(table));

  ++nextTabId;
  selectTab(id);

  return panelId;
}

// Selects a tab by the ID of its contents div.
function selectTab(tabId) {
  var index = $("#tabs a[href='#" + tabId + "']").parent().index();
  $("#tabs").tabs("option", "active", index);
}

// Generates a tab label string with given range.
function generateTabLabel(rowStart, rowEnd, columnStart, columnEnd) {
  return rowStart + " &minus; " + rowEnd + "<br>" + columnStart + " &minus; " + columnEnd;
}

// Removes all cells from a table effectively making the table disappear from the view.
function clearTable(table) {
  while (table.rows.length) {
    table.deleteRow(0);
  }
}

// Updates the active tab's table with the current form values.
function updateTable() {
  if (!$("#multTableInput").valid()) {
    return;
  }
  if (!$("#tabs > ul > li").size()) {
    return;
  }

  var rowStart = parseInt($("#rowStart").val());
  var rowEnd = parseInt($("#rowEnd").val());
  var columnStart = parseInt($("#columnStart").val());
  var columnEnd = parseInt($("#columnEnd").val());

  var table = generateMultTable(rowStart, rowEnd, columnStart, columnEnd);
  var activeTabIndex = $("#tabs").tabs("option", "active");
  var tabId = $("#tabs ul li").eq(activeTabIndex).attr("id");  // "tab-1", "tab-2", ...
  var tabIdNumber = tabId.substr(4);
  var panelId = "tab-panel-" + tabIdNumber;

  var label = generateTabLabel(rowStart, rowEnd, columnStart, columnEnd);
  $("#" + tabId + " div").html(label);
  $("#" + panelId).empty();
  $("#" + panelId).append(table);
}

// Creates a table object containing multiplication table using the given number range.
function generateMultTable(rowStart, rowEnd, columnStart, columnEnd) {
  var multTable = document.createElement("table");
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

  return multTable;
}

// Draws the default table.
// Installs the event handlers.
$(window).load(function() {
  var defaultRowStart = 1;
  var defaultRowEnd = 4;
  var defaultColumnStart = 1;
  var defaultColumnEnd = 6;
  var minRange = -9;
  var maxRange = 9;
  

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
        range: [minRange, maxRange]
      },
      rowEnd: {
        required: true,
        number: true,
        integer: true,
        range: [minRange, maxRange]
      },
      columnStart: {
        required: true,
        number: true,
        integer: true,
        range: [minRange, maxRange]
      },
      columnEnd: {
        required: true,
        number: true,
        integer: true,
        range: [minRange, maxRange]
      }
    },
    messages: {
      rowStart: {
        number: "Please enter a number between " + minRange + " and " + maxRange + ".",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      },
      rowEnd: {
        number: "Please enter a number between " + minRange + " and " + maxRange + ".",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      },
      columnStart: {
        number: "Please enter a number between " + minRange + " and " + maxRange + ".",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      },
      columnEnd: {
        number: "Please enter a number between " + minRange + " and " + maxRange + ".",
        integer: "Please enter a whole number (1, 2, 3, ...)."
      }
    },
    errorElement: "span"
  });

  document.getElementById("rowStart").value = defaultRowStart;
  document.getElementById("rowEnd").value = defaultRowEnd;
  document.getElementById("columnStart").value = defaultColumnStart;
  document.getElementById("columnEnd").value = defaultColumnEnd;

  // Create sliders.
  $("#rowStartSlider").slider({
    value: defaultRowStart,
    step: 1,
    min: minRange,
    max: maxRange,
    slide: function( event, ui ) {
             $("#rowStart").val(ui.value);
             updateTable();
           }
  });
  $("#rowStart").change(function () {
    var value = this.value;
    $("#rowStartSlider").slider("value", parseInt(value));
    updateTable();
  });

  $("#rowEndSlider").slider({
    value: defaultRowEnd,
    step: 1,
    min: minRange,
    max: maxRange,
    slide: function( event, ui ) {
             $("#rowEnd").val(ui.value);
             updateTable();
           }
  });
  $("#rowEnd").change(function () {
    var value = this.value;
    $("#rowEndSlider").slider("value", parseInt(value));
    updateTable();
  });

  $("#columnStartSlider").slider({
    value: defaultColumnStart,
    step: 1,
    min: minRange,
    max: maxRange,
    slide: function( event, ui ) {
             $("#columnStart").val(ui.value);
             updateTable();
           }
  });
  $("#columnStart").change(function () {
    var value = this.value;
    $("#columnStartSlider").slider("value", parseInt(value));
    updateTable();
  });

  $("#columnEndSlider").slider({
    value: defaultColumnEnd,
    step: 1,
    min: minRange,
    max: maxRange,
    slide: function( event, ui ) {
             $("#columnEnd").val(ui.value);
             updateTable();
           }
  });
  $("#columnEnd").change(function () {
    var value = this.value;
    $("#columnEndSlider").slider("value", parseInt(value));
    updateTable();
  });


  // Create tabs.
  $("#tabs").tabs();

  // Generate a default table.
  var table = generateMultTable(defaultRowStart, defaultRowEnd, defaultColumnStart, defaultColumnEnd);
  addTab(table, generateTabLabel(defaultRowStart, defaultRowEnd, defaultColumnStart, defaultColumnEnd));

  $("#tabs").delegate( "img.ui-icon-close", "click", function() {
    var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
    $( "#" + panelId ).remove();
    $("#tabs").tabs( "refresh" );
  });

});



