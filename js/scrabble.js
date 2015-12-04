/*
Author: Yong Cho
Email: Yong_Cho@student.uml.edu
Created: 12/3/2015
File Description: JavaScript for assignment 9 page.
*/

"use strict";

/* This associative array is copied from https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture26.jsp. 
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

function resetTiles() {
  var iRow, iCol;

  // Remove all letter tiles out on the page. (Removing all elements of a class -
  // http://stackoverflow.com/questions/10842471/remove-all-elements-of-a-certain-class-with-javascript)
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

      // This function is called when the tile is released from dragging. In case the tile was
      // not dropped on the board, it takes different actions depending on where the tile
      // originally came from. If the tile came from the rack, it reverts it back to the rack.
      // If the tile came from the board, it again moves it to the rack because the user probably
      // wanted to take it out of the board. However, in this case, the job is done manually because 
      // 'auto reverting' would put it back to the board.
      $(this).draggable("option", "revert", function(accepted) {
        var iRow, iCol;

        if (accepted === false) {
          // Iterate the board slots and see if the tile came from any of the slots.
          for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
            for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
              if (boardSlots[iRow][iCol].tileId === $(this).attr("id")) {
                // The tile came from the board and dropped outside the board. Put it back in the rack.
                delete boardSlots[iRow][iCol].tileId;
                delete boardSlots[iRow][iCol].letter;
                $("#letterRack").append($(this));
                $(this).css({"position": "relative", "top": "0px", "left": "0px" });

                // We're manually putting it in the rack. Don't revert it back to the board.
                return false;
              }
            }
          }

          // If we got here, the tile came from the rack. Revert it back to the rack.
          return true;
        }
      });
    },
    stop: function() {
      // Once finished dragging, lower the z-index so that the tile is above the
      // board iamge and below other tiles that are being dragged.
      $(this).css("z-index", "99");
    }
  });
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
// (http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range)
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

$(window).load(function() {
  var row, col;

  // Lay down the board images.
  for (row = 0; row < Object.keys(boardSlots).length; ++row) {
    for (col = 0; col < Object.keys(boardSlots[row]).length; ++col) {
      // Add tile image.
      $("#board").append("<img src=\"" + boardSlots[row][col].image + "\" class=\"boardImage\" row=\"" + row + "\" col=\"" + col + "\" />");
    }
  }

  // Make the board images droppable.
  $(".boardImage").droppable({
    accept: ".letterTile",
    drop: function(event, ui) {
      var row, col, letter, tileId, iRow, iCol;

      row = $(this).attr("row");
      col = $(this).attr("col");
      
      // Check if a tile is already on this slot.
      if (typeof(boardSlots[row][col].tileId) === "undefined") {
        letter = ui.draggable.attr("letter");
        tileId = ui.draggable.attr("id");

        // Make the dropped tile snap to the board image.
        $(ui.draggable).css("position", "absolute");
        $(ui.draggable).css("top", $(this).position().top);
        $(ui.draggable).css("left", $(this).position().left);

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
      } else {
        // There is already a tile on the slot. Revert the tile back to where it came from.
        ui.draggable.draggable("option", "revert", true);
        if (ui.draggable.attr("id") != boardSlots[row][col].tileId) {
          // In this case, the user brought over a different tile.
          $("#errorMsg").html("You can't place a letter over another letter.");
        } 
        // else, the same tile came back to the slot. 
        // Maybe the user decided to move out the tile and changed their mind?
        // Anyway, no warning message is necessary.
      }
    }
  });

  resetTiles();
});
