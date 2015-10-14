var defaultRowStart = 1;
    var defaultRowEnd = 4;
    var defaultColumnStart = 1;
    var defaultColumnEnd = 6;

    function submit() {
      // Beware that the user inputs are of type 'string'.
      var rowStart = document.getElementById("rowStart").value;
      var rowEnd = document.getElementById("rowEnd").value;
      var columnStart = document.getElementById("columnStart").value;
      var columnEnd = document.getElementById("columnEnd").value;

      if (validateInput())
        generateMultTable(rowStart, rowEnd, columnStart, columnEnd);
    }

    // Validate user input - only positive integers are valid for the row and column numbers.
    function validateInput() {
      var rowStart = document.getElementById("rowStart").value;
      var rowEnd = document.getElementById("rowEnd").value;
      var columnStart = document.getElementById("columnStart").value;
      var columnEnd = document.getElementById("columnEnd").value;
      var errorCount = 0;

      if (rowStart == null || rowStart == "" || rowEnd == null || rowEnd == "") {
        document.getElementById("rowErrorMessage").innerHTML = "Range must not be blank.";
        ++errorCount;
      } else if (isNaN(rowStart) || isNaN(rowEnd)) {
        document.getElementById("rowErrorMessage").innerHTML = "Range must be a number. (1, 2, 3, ...)";
        ++errorCount;
      } else if (Math.floor(rowStart) != rowStart || Math.floor(rowEnd) != rowEnd) {
        document.getElementById("rowErrorMessage").innerHTML = "Range must be a whole number. (1, 2, 3, ...)";
        ++errorCount;
      } else if (rowStart < 1 || rowEnd < 1) {
        document.getElementById("rowErrorMessage").innerHTML = "Range must be 1 or higher. (1, 2, 3, ...)";
        ++errorCount;
      } else {
        document.getElementById("rowErrorMessage").innerHTML = "";
      }

      if (columnStart == null || columnStart == "" || columnEnd == null || columnEnd == "") {
        document.getElementById("columnErrorMessage").innerHTML = "Range must not be blank.";
        ++errorCount;
      } else if (isNaN(columnStart) || isNaN(columnEnd)) {
        document.getElementById("columnErrorMessage").innerHTML = "Range must be a number. (1, 2, 3, ...)";
        ++errorCount;
      } else if (Math.floor(columnStart) != columnStart || Math.floor(columnEnd) != columnEnd) {
        document.getElementById("columnErrorMessage").innerHTML = "Range must be a whole number. (1, 2, 3, ...)";
        ++errorCount;
      } else if (columnStart < 1 || columnEnd < 1) {
        document.getElementById("columnErrorMessage").innerHTML = "Range must be 1 or higher. (1, 2, 3, ...)";
        ++errorCount;
      } else {
        document.getElementById("columnErrorMessage").innerHTML = "";
      }

      highlightError(rowStart, "rowStart");
      highlightError(rowEnd, "rowEnd");
      highlightError(columnStart, "columnStart");
      highlightError(columnEnd, "columnEnd");

      return errorCount == 0;
    }

    function highlightError(value, inputFieldId, errorMsgFieldId) {
      if (value == null || value == "" || isNaN(value) || Math.floor(value) != value || value < 1) {
        $(document.getElementById(inputFieldId)).addClass("errorHighlight");
      } else {
        $(document.getElementById(inputFieldId)).removeClass("errorHighlight");
      }
    }

    // Removes all cells from the multiplication table.
    function clearMultTable() {
      var multTable = document.getElementById("mult_table");
      clearTable(multTable);
    }

    // Removes all cells from a table effectively making the table disappear from the view.
    function clearTable(table) {
      while (table.rows.length) {
        table.deleteRow(0);
      }
    }

    function generateMultTable(rowStart, rowEnd, columnStart, columnEnd) {
      var multTable = document.getElementById("mult_table");
      clearTable(multTable);

      var rowCount = rowEnd - rowStart + 1;
      var columnCount = columnEnd - columnStart + 1;
      var iRow, iCol, row, cell;

      // Top row
      row = multTable.insertRow(0);

      // The empty top-left cell
      row.insertCell(0);

      // Cells in top row
      var cellValue = columnStart;
      for (iCol = 1; iCol <= columnCount; ++iCol) {
        row.insertCell(iCol).innerHTML = cellValue++;
      }

      // Second through last rows
      var rowValue = rowStart;
      for (iRow = 1; iRow <= rowCount; ++iRow) {
        row = multTable.insertRow(iRow);

        // Leftmost cell in the row
        row.insertCell(0).innerHTML = rowValue;

        // The other cells in the row
        columnValue = columnStart;
        for (iCol = 1; iCol <= columnCount; ++iCol) {
          row.insertCell(iCol).innerHTML = rowValue * columnValue;
          ++columnValue;
        }
        ++rowValue;
      }
    }

    window.onload = function() {
      document.getElementById("rowStart").value = defaultRowStart;
      document.getElementById("rowEnd").value = defaultRowEnd;
      document.getElementById("columnStart").value = defaultColumnStart;
      document.getElementById("columnEnd").value = defaultColumnEnd;

      document.getElementById("rowStart").oninput = validateInput;
      document.getElementById("rowEnd").oninput = validateInput;
      document.getElementById("columnStart").oninput = validateInput;
      document.getElementById("columnEnd").oninput = validateInput;

      generateMultTable(defaultRowStart, defaultRowEnd, defaultColumnStart, defaultColumnEnd);
    }
