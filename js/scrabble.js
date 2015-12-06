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

// Globals to track current score.
var scrabbleScore = { "totalScore": 0, "highestScore": 0 };

// Calculates and returns the score for the tiles currently on the board.
// Yes. This algorithm will need to change if we decide to implement multiple rows.
scrabbleScore.calculateBoardScore = function() {
  var iRow, iCol, letter, letterValue, wordMultiplier = 1, boardScore = 0;

  if (!validateWord()) {
    return 0;
  }

  // Add up all the letters' values. Count for letter modifiers on the way.
  for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
    for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
      letter = boardSlots[iRow][iCol].letter;
      if (letter) {
        letterValue = scrabbleTiles[letter].value;
        boardScore += letterValue * boardSlots[iRow][iCol].letterMultiplier;

        // We're pre-multiplying all the word modifiers here.
        wordMultiplier *= boardSlots[iRow][iCol].wordMultiplier;
      }
    }
  }

  // Now apply the word modifier.
  boardScore *= wordMultiplier;

  return boardScore;
}

// Updates the scoreboard texts based on the current tiles layout.
scrabbleScore.refresh = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  $("#score").html(scrabbleScore.totalScore + " (+" + boardScore + ")");
  $("#highestScore").html(scrabbleScore.highestScore);
}

// Updates the total score and the highest score variables based on the current tiles layout.
// Also updates the scoreboard texts with the new total score and highest score (if total > highest).
scrabbleScore.commit = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  scrabbleScore.totalScore += boardScore;
  $("#score").html(scrabbleScore.totalScore);

  if (scrabbleScore.totalScore > scrabbleScore.highestScore) {
    scrabbleScore.highestScore = scrabbleScore.totalScore;
    $("#highestScore").html(scrabbleScore.totalScore);
    $("#highestScore").css("color", "#339933");
  }
}

// Resets the score to 0 and updates the page as necessary.
scrabbleScore.restart = function() {
  scrabbleScore.totalScore = 0;
  $("#score").html(0);
  $("#highestScore").css("color", "");
}

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
      allTiles.splice(randomIndex, 1);  // Removes one element from the array.
      // console.log("Handing out " + randomLetter + ". Remaining: " + scrabbleTiles[randomLetter]["number-remaining"] + ". Available: " + allTiles + ".");
    }
  }

  // Display number of remaining tiles on the scoreboard.
  $("#remainingTiles").html(allTiles.length);

  if (!allTiles.length) {
    // We ran out of tiles to hand out. Disable moving on to the next word.
    toggleFinishButton(true);
  }

  return hand;
}

// Switches the appearance and functionality of the 'next-word' button. If 'toFinishButton' is true,
// changes the button to 'finish' button. This may happen when we run out of tiles to hand out and
// cannot proceed to the next word. Does the opposite if toFinishButton is false.
function toggleFinishButton(toFinishButton) {
  var nextWordButton = document.getElementById("nextWordButton");
  if (toFinishButton) {
    nextWordButton.innerHTML = "Finish";
    nextWordButton.onclick = function(event) {
      finish();
    }
  } else {
    nextWordButton.innerHTML = "Next Word";
    nextWordButton.onclick = function(event) {
      nextWord();
    }
  }
}

// Resets the board and tiles. Starts the first word.
function restart() {
  var iRow, iCol;

  // Clear the rack. (We're putting all tiles back to the deck.)
  $("#letterRack img").remove();

  // Clear the board.
  $("#board img").remove();

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

  // Activate the next-word button if it is not already activated. The button might have been
  // disabled if we consumed all times in the previous round.
  toggleFinishButton(false);
  document.getElementById("nextWordButton").disabled = false;

  scrabbleScore.restart();

  // Start the first word.
  nextWord();
}

// Removes all tiles from the board and refills the hand with whatever number of new tiles needed.
function nextWord() {
  var iRow, iCol, i, key, tileImageId, newTile, hand;

  scrabbleScore.commit();

  // Remove all letter tiles on the board (Leave the ones on the rack).
  $("#board img").remove();

  // Reset the slot data structure.
  for (iRow = 0; iRow < Object.keys(boardSlots).length; ++iRow) {
    for (iCol = 0; iCol < Object.keys(boardSlots[iRow]).length; ++iCol) {
      delete boardSlots[iRow][iCol].tileId;
      delete boardSlots[iRow][iCol].letter;
    }
  }

  // Draw as many tiles as needed to refill the rack with 7 tiles. Lay out the tile images.
  hand = getFromDeck(7 - $("#letterRack img").length);
  for (i = 0; i < hand.length; ++i) {
    key = hand[i];
    tileImageId = generateTileId();
    newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
    // Add tile image.
    $("#letterRack").append(newTile);

    // Apply CSS condition for the tile being on the rack. This may do minor position adjustment
    // to the tile image in order to make it sit naturally on the rack background image.
    newTile.addClass("letterTileOnRack");

    // Make the tile draggable.
    newTile.draggable({
      revertDuration: 200,  // msec
      start: function(event, ui) {
        // Tile should be on top of everything else when being dragged.
        $(this).css("z-index", "100");

        // Revert option needs to be manually reset because it gets modified by droppables 
        // to force reverting after dropping has occured.
        $(this).draggable("option", "revert", "invalid");
      },
      stop: function() {
        // Once finished dragging, reset the z-index.
        $(this).css("z-index", "");
      }
    });
  }

  // Clear the current word display.
  $("#word").html("");

  // Clear the check marks on the instruction.
  checkSingleWord(false);
  checkTwoLettersAndMore(false);
  checkDictionary(false);
}

// Adds up the current board score to the total score and stops the play.
// The only action that can be taken after this is restarting the play from the beginning.
function finish() {
  scrabbleScore.commit();

  // Disable next-word/finish button.
  document.getElementById("nextWordButton").disabled = true;

  // Also disable all draggables.
  $(".letterTile").draggable("disable");
}

// Generates a unique string to be used as a tile ID. This function generates a unique string
// as long as the page stays loaded.
function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();

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
// Source: Student note on Piazza (https://piazza.com/class/icm9jynacvn5kx?cid=43)
function isDictionaryWord(possibleWord) {
  if (possibleWord.length > 0 && isDictionaryWord.dict[possibleWord]) {
    return true;
  }

  return false;
}
// The dictionary lookup object
isDictionaryWord.dict = {};
// Do an ajax request for the dictionary file.
$.ajax({
  url: "assignment9/dictionary.txt",
  success: function(result) {
    // Get an array of all the words.
    var words = result.split("\n");

    // Add them as properties to the dictionary lookup object.
    // This will allow for fast lookups later. All words are converted to capital letters.
    for (var i = 0; i < words.length; ++i) {
      isDictionaryWord.dict[words[i].toUpperCase()] = true;
    }
  }
});

// Reads the letters on the board and checks if it is a valid Scrabble word.
// Updates the page contents based on the validation result.
// Returns
// The word: if it is a valid word
// false   : if it is not valid
function validateWord() {
  var iCol, columnLength, letter, errorCount, word = "", ROW = 0;

  columnLength = Object.keys(boardSlots[ROW]).length;

  // Read each letter and append them to word.
  for (iCol = 0; iCol < columnLength; ++iCol) {
    letter = boardSlots[ROW][iCol].letter;
    if (typeof(letter) === "undefined") {
      // Use special character to represent an empty slot.
      word += "\xB7";  // middle dot character
    } else {
      word += letter;
    }    
  }

  // Remove leading and trailing empty slot characters.
  word = word.replace(/^\xB7+/, "");
  word = word.replace(/\xB7+$/, "");

  $("#word").html(word);

  // Now let's check for any errors in the word. Update the page contents as we check each condition.
  errorCount = 0;

  // Check if we have anything on the board.
  if (word == "") {
    checkSingleWord(false);
    ++errorCount;
  } else {
    // Check if there is a gap between letters. Gap is not allowed.
    var rgxDisconnectedWord = new RegExp("[A-Z_]\xB7+[A-Z_]");
    if (rgxDisconnectedWord.test(word)) {
      checkSingleWord(false);
      ++errorCount;
    } else {
      checkSingleWord(true);
    }
  }

  // Check if the word has at least 2 letters. Words with one letter may show up in English dictinonaries
  // but not allowed in Scrabble.
  if (word.length >= 2) {
    checkTwoLettersAndMore(true);
  } else {
    checkTwoLettersAndMore(false);
    ++errorCount;
  }

  // Check if the word shows up in our dictionary.
  if (isDictionaryWord(word)) {
    checkDictionary(true);
  } else {
    checkDictionary(false);
    ++errorCount;
  }

  if (errorCount) {
    return false;
  }

  return word;
}

// Make a jQuery object grayscale and semi-transparent making it look like it's deactivated.
// CSS source: http://blog.nmsdvid.com/css-filter-property/
function grayscaleAndFade(jQueryObject, yes) {
  if (yes) {
    jQueryObject.css({
      "-webkit-filter": "grayscale(100%)", 
      "-moz-filter": "grayscale(100%)", 
      "-o-filter": "grayscale(100%)", 
      "-ms-filter": "grayscale(100%)", 
      "filter": "grayscale(100%)",
      "opacity": 0.2
    });
  } else {
    jQueryObject.css({
      "-webkit-filter": "", 
      "-moz-filter": "", 
      "-o-filter": "", 
      "-ms-filter": "", 
      "filter": "",
      "opacity": 1.0
    });
  }
}

// Following three functions toggle the check (v) icon next to each instruction message on or off.
function checkTwoLettersAndMore(check) {
  if (check) {
    grayscaleAndFade($("#minLengthIcon"), false);
  } else {
    grayscaleAndFade($("#minLengthIcon"), true);
  }
}

function checkSingleWord(check) {
  if (check) {
    grayscaleAndFade($("#oneWordCheckIcon"), false);
  } else {
    grayscaleAndFade($("#oneWordCheckIcon"), true);
  }
}

function checkDictionary(check) {
  if (check) {
    grayscaleAndFade($("#dictionaryCheckIcon"), false);
  } else {
    grayscaleAndFade($("#dictionaryCheckIcon"), true);
  }
}

$(window).load(function() {
  var row, col, bgImagePath, newSlot;
  var IMAGE_WIDTH = 81, IMAGE_HEIGHT = 87, SLOT_MARGIN = 1, SLOT_BORDER_WIDTH = 1;

  // Set the fixed height for the board appropriate for the number of rows.
  $("#board").css("height", (IMAGE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * Object.keys(boardSlots).length);
  // Set the fixed width for the board to accomodate one full row.
  $("#board").css("width", (IMAGE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * Object.keys(boardSlots[0]).length);

  // Lay down the board images.
  for (row = 0; row < Object.keys(boardSlots).length; ++row) {
    for (col = 0; col < Object.keys(boardSlots[row]).length; ++col) {
      bgImagePath = boardSlots[row][col].image;
      newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
      $("#board").append(newSlot);
      newSlot.css({"width": IMAGE_WIDTH, "height": IMAGE_HEIGHT, "margin": SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH});
    }
  }

  // Make the board images droppable.
  $(".boardSlot").droppable({
    // This function determines which slots get highlighted when dragging a tile.
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
      var row, col, letter, word, tileId, iRow, iCol;

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

      // Validate and display the word we have so far.
      word = validateWord();
      if (word) {
        console.log("word: " + word);
      }

      // Refresh the scoreboard.
      scrabbleScore.refresh();
    }
  });

  // Make the rack droppable so the tiles can be dropped in it.
  $("#letterRack").droppable({
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function(event, ui) {
      var tileId, iRow, iCol, word;

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

            // Validate and display the word we have so far.
            word = validateWord();
            if (word) {
              console.log("word: " + word);
            }

            // Refresh the scoreboard.
            scrabbleScore.refresh();

            return;
          }
        }
      }

      // User grabbed a tile and put it right back on the rack. Use the revert function
      // to put the tile in the same spot it came out of.
      ui.draggable.draggable("option", "revert", true);
    }
  });

  // Reset the board and tiles. Start the first word.
  restart();
});
