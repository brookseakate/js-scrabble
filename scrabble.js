const TILE_SCORES = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
};

var Scrabble = function() {};

// score(word): returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter.
Scrabble.prototype.score = function(word) {
  var score = 0;

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    score += TILE_SCORES[char];
  }
  return score;
};

// @TODO - case insensitivity
// @TODO - add bonus



module.exports = Scrabble;

// // @TODO - move elsewhere as a test file

var s = new Scrabble();
console.log("TESTS");
console.log("-------------------------------------------");
console.log("CAT should be 5: " + s.score("CAT")); // score: 5
console.log("KOALA should be 5: " + s.score("KOALA")); // score: 9
console.log("MUZJIKS should be 79 with bonus: " + s.score("MUZJIKS")); // score: 9
