/*
Author: Yong Cho
Email: Yong_Cho@student.uml.edu
Created: 12/3/2015
File Description: JavaScript for assignment 9 page.
*/

"use strict";

/* This array is copied from https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture26.jsp. 
I added "image" property to it. */
var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/scrabble/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/scrabble/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/scrabble/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/scrabble/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/scrabble/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/scrabble/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/scrabble/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/scrabble/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_Blank.jpg"  } ;

/* Images are downloaded from 
https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-assn/ImplementingScrabble-v01.jsp. */
var boardSlots = [];
boardSlots[0] = [];
boardSlots[0][0] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
boardSlots[0][1] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/scrabble/Scrabble_DoubleWordScore_81x87.jpg"};
boardSlots[0][2] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
boardSlots[0][3] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
boardSlots[0][4] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
boardSlots[0][5] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/scrabble/Scrabble_DoubleWordScore_81x87.jpg"};
boardSlots[0][6] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};


// Hands out n random letter tiles from the deck adjusting the number-remaining properties for the scrabbleTiles.
// If there are less remaining tiles than the requested, then returns all remaining tiles. Returns an empty array
// when no tiles are remaining in deck.
// Returns the hand as an array of letters.
// ex) ["A", "K", "Z", ...]
function getFromDeck(n) {
  var hand = [];
  var allTiles = [];

  // Make an array of all remaining tiles for a random selection.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        allTiles.push(key);
      }
    }
  }

  // Try to pick out n letter tiles. If we don't have n tiles, then hand out whatever we have.
  for (var i = 0; i < n; ++i) {
    if (allTiles.length) {
      var randomIndex = getRandomInt(0, Object.keys(allTiles).length - 1);
      var randomLetter = allTiles[randomIndex];
      hand.push(randomLetter);
      --scrabbleTiles[randomLetter]["number-remaining"];
      allTiles.splice(randomIndex, 1);
      console.log("Handing out " + randomLetter + ". Remaining: " + scrabbleTiles[randomLetter]["number-remaining"] + ". Available: " + allTiles + ".");
    }
  }

  return hand;
}

// Reinitializes the deck and lays out new tiles.
function resetTiles() {
  var iRow, iCol;

  // Remove all letter tiles out on the page.
  // Source: http://stackoverflow.com/questions/10842471/remove-all-elements-of-a-certain-class-with-javascript
  var letterTiles = document.getElementsByClassName("letterTile");
  while (letterTiles[0]) {
    letterTiles[0].parentNode.removeChild(letterTiles[0]);
  }

  // Reset the slot data structure.
  for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
    for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
      delete boardSlots[iRow][iCol].tileId;
      delete boardSlots[iRow][iCol].letter;
    }
  }

  // Reset the deck data structure.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
    }
  }

  // Lay out the letter tile images.
  var hand = getFromDeck(7);
  for (var i = 0; i < hand.length; ++i) {
    var key = hand[i];
    var tileImageId = generateTileId();

    // Add tile image.
    $("#letterRack").append("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
  }

  // Make the tile images draggable.
  $(".letterTile").draggable({
    revertDuration: 200,  // msec
    start: function(event, ui) {
      // Clear any error message when dragging starts.
      $("#errorMsg").empty();

      // Tile should be on top of everything else when being dragged.
      $(this).css("z-index", "100");

      // Revert option needs to be manually reset because it gets modified by droppables 
      // to force reverting after dropping has occured.
      $(this).draggable("option", "revert", "invalid");
    },
    stop: function() {
      // Once finished dragging, revert the z-index.
      $(this).css("z-index", "");
    }
  });

  // Initially all tiles are on the rack. Apply css for that condition.
  $(".letterTile").addClass("letterTileOnRack");
}

// Generates a unique string to be used as a tile ID.
function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();
  console.log("Tile ID = " + id);

  return id;
}

// Returns a random integer between min (inclusive) and max (inclusive).
// Source: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Debug function to print the status of the board.
function printBoard() {
  var iRow, iCol;

  for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
    for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
      console.log("boardSlots[" + iRow + "][" + iCol + "] letter: " + boardSlots[iRow][iCol].letter + ", tileId: " + boardSlots[iRow][iCol].tileId);
    }
  }
}

// Checks if a string is a valid dictionary word.
function isWord(possibleWord) {

}

$(window).load(function() {
  var row, col;
  var IMAGE_WIDTH = 81, IMAGE_HEIGHT = 87, SLOT_MARGIN = 1, SLOT_BORDER_WIDTH = 1;

  // Set the fixed height for the board appropriate for the number of rows.
  $("#board").css("height", (IMAGE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * Object.keys(boardSlots).length);
  // Set the fixed width for the board to accomodate one full row.
  $("#board").css("width", (IMAGE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * Object.keys(boardSlots[0]).length);

  // Lay down the board images.
  for (row = 0; row < Object.keys(boardSlots).length; ++row) {
    for (col = 0; col < Object.keys(boardSlots[row]).length; ++col) {
      var bgImagePath = boardSlots[row][col].image;
      var newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
      $("#board").append(newSlot);
      newSlot.css({"width": IMAGE_WIDTH, "height": IMAGE_HEIGHT, "margin": SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH});
    }
  }

  // Make the board images droppable.
  $(".boardSlot").droppable({
    accept: function(draggable) {
      var row, col;

      row = $(this).attr("row");
      col = $(this).attr("col");

      if (boardSlots[row][col].tileId === draggable.attr("id")) {
        // The tile should be able to drop back in to the slot it was lifted out of.
        return true;
      } else if (typeof(boardSlots[row][col].tileId) === "undefined") {
        // The slot is empty.
        return true;
      } else {
        // The slot is already occupied.
        return false;
      }
    },
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function(event, ui) {
      var row, col, letter, tileId, iRow, iCol;

      ui.draggable.removeClass("letterTileOnRack");
      ui.draggable.addClass("letterTileOnBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");
      
      letter = ui.draggable.attr("letter");
      tileId = ui.draggable.attr("id");

      // Make the dropped tile snap to the board image.
      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      console.log("Dropped " + letter + " (" + tileId + ") on (" + row + ", " + col + ").");

      // If the tile came from another slot, clear the properties for that slot.
      for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
        for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
          if (boardSlots[iRow][iCol].tileId === tileId) {
            delete boardSlots[iRow][iCol].tileId;
            delete boardSlots[iRow][iCol].letter;
          }
        }
      }

      // Record that this slot has the tile now.
      boardSlots[row][col].letter = letter;
      boardSlots[row][col].tileId = tileId;
    }
  });

  // Make the rack droppable so the tiles can be dropped in it.
  $("#letterRack").droppable({
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function(event, ui) {
      var tileId, iRow, iCol;

      ui.draggable.removeClass("letterTileOnBoard");
      ui.draggable.addClass("letterTileOnRack");

      tileId = ui.draggable.attr("id");

      // If the tile came from the board, clear the properties for the slot it came from.
      for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
        for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
          if (boardSlots[iRow][iCol].tileId === tileId) {
            // Place the tile on the rack.
            $("#letterRack").append(ui.draggable);
            ui.draggable.css({"position": "relative", "top": "", "left": ""});

            // Mark the tile off the board.
            delete boardSlots[iRow][iCol].tileId;
            delete boardSlots[iRow][iCol].letter;

            return;
          }
        }
      }

      // User grabbed a tile and put it right back on the rack. Use the revert function
      // to put the tile in the same spot it came out of.
      ui.draggable.draggable("option", "revert", true);
    }    
  });

  resetTiles();
});
