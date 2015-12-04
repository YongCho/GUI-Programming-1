/*
Author: Yong Cho
Email: Yong_Cho@student.uml.edu
Created: 12/3/2015
File Description: JavaScript for assignment 9 page.
*/

"use strict";

/* This associative array is copied from https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture26.jsp. 
I added "path" property to it. */
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "path" : "img/scrabble/Scrabble_Tile_A.jpg"  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_C.jpg"  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "path" : "img/scrabble/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "path" : "img/scrabble/Scrabble_Tile_E.jpg"  } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "path" : "img/scrabble/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "path" : "img/scrabble/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "path" : "img/scrabble/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "path" : "img/scrabble/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "path" : "img/scrabble/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "path" : "img/scrabble/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "path" : "img/scrabble/Scrabble_Tile_O.jpg"  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "path" : "img/scrabble/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "path" : "img/scrabble/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "path" : "img/scrabble/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "path" : "img/scrabble/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "path" : "img/scrabble/Scrabble_Tile_U.jpg"  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "path" : "img/scrabble/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "path" : "img/scrabble/Scrabble_Tile_Z.jpg"  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "path" : "img/scrabble/Scrabble_Tile_Blank.jpg"  } ;

// Returns a random integer between min (inclusive) and max (inclusive).
// (http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hands out n random letter tiles from the deck adjusting the number-remaining properties for the ScrabbleTiles.
// If there are less remaining tiles than the requested, then returns all remaining tiles.
// Returns the hand as an array of letters.
// ex) ["A", "K", "Z", ...]
function getFromDeck(n) {
  var hand = [];
  var allTiles = [];

  // Make an array of all remaining tiles for a random selection.
  for (var key in ScrabbleTiles) {
    if (ScrabbleTiles.hasOwnProperty(key)) {
      var remaining = ScrabbleTiles[key]["number-remaining"];
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
      --ScrabbleTiles[randomLetter]["number-remaining"];
      allTiles.splice(randomIndex, 1);
      console.log("Handing out " + randomLetter + ". Remaining: " + ScrabbleTiles[randomLetter]["number-remaining"] + ". Available: " + allTiles + ".");
    }
  }

  return hand;
}

function resetBoard() {
  // Remove all letter tiles. (Removing all elements of a class -
  // http://stackoverflow.com/questions/10842471/remove-all-elements-of-a-certain-class-with-javascript)
  var letterTiles = document.getElementsByClassName("letterTile");
  while (letterTiles[0]) {
    letterTiles[0].parentNode.removeChild(letterTiles[0]);
  }

  // Reset the deck.
  for (var key in ScrabbleTiles) {
    if (ScrabbleTiles.hasOwnProperty(key)) {
      ScrabbleTiles[key]["number-remaining"] = ScrabbleTiles[key]["original-distribution"];
    }
  }

  // Lay out the letter tile images.
  var hand = getFromDeck(7);
  for (var i = 0; i < hand.length; ++i) {
    var key = hand[i];
    var tileImageId = keyToTileImageId(key);

    // Add tile image.
    $("#letterRack").append("<img id=\"" + tileImageId + "\" src=\"" + ScrabbleTiles[key]["path"] + "\" class=\"letterTile\" />");

    // Make the tile image draggable.
    $("#" + tileImageId).draggable();
  }

  // Make the board images droppable.
  $(".boardTile").droppable({
    drop: function(event, ui) {
      console.log("Dropped " + tileImageIdToKey(ui.draggable.attr("id")));
      // Make the dropped letter snap to the board image.
      $(ui.draggable).css("position", "absolute");
      $(ui.draggable).css("top", $(this).position().top);
      $(ui.draggable).css("left", $(this).position().left);
    }
  });
}


// Converts a letter c to the tile image ID representing that letter.
// ex) "A" -> "letterTileA"
function keyToTileImageId(letter) {
  var prefix = "letterTile";
  var id;
  
  if (letter == "_") {
    id = prefix + "Blank";
  } else {
    id = prefix + letter;
  }

  return id;
}

// Converts a letter tile image ID to a letter key.
// ex) "letterTileA" -> "A"
function tileImageIdToKey(tileId) {
  var key;

  if (tileId == "letterTileBlank") {
    key = "_";
  } else {
    key = tileId.substring(10, 11);
  }
  
  return key;
}

// Converts an integer to a letter for the ScrabbleTiles key.
// N must be [0, 26], otherwise the function's behavior is undefined.
// ex) 0 -> "A"
//     25 -> "Z"
//     26 -> "_"
function intToKey(n) {
  var c;
  if (n == 26) {
    c = "_";
  } else {
    c = String.fromCharCode(n + "A".charCodeAt(0));
  }

  return c;
}

$(window).load(function() {
  resetBoard();

  $("#word").html("hello");
  $("#score").html(90);
});
