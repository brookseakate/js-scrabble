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
  this.word = word.toUpperCase();

  var score = 0;

  for (var i = 0; i < this.word.length; i++) {
    var char = this.word[i];
    score += TILE_SCORES[char];
  }

  var total = score + this.bonus(this.word);
  return total;
};

Scrabble.prototype.bonus = function(word) {
  var bonus_result = ( word.length === 7 ) ? 50 : 0 ;
  return bonus_result;
};
// @TODO - limit word length?


module.exports = Scrabble;

// // @TODO - move TESTS below elsewhere as a separate file
var s = new Scrabble();
console.log("-------------------------------------------");
console.log("TESTS");
console.log("-------------------------------------------");
console.log("'cAt' score should be 5. Score is: " + s.score("cAt")); // score: 5
console.log("'cAt' bonus should be 0. Bonus is: " + s.bonus("cAt")); // bonus: 0
console.log("'koala' score should be 9. Score is: " + s.score("koala")); // score: 9
console.log("'MUZJIKS' bonus should be 50. Bonus is: " + s.bonus("MUZJIKS")); // bonus: 50
console.log("'MUZJIKS' score should be 79 with bonus. Score is: " + s.score("MUZJIKS")); // score: 79
console.log("'aBieTiC' bonus should be 50. Bonus is: " + s.bonus("aBieTiC")); // bonus: 50
console.log("'aBieTiC' score should be 61 with bonus. Score is: " + s.score("aBieTiC")); // score: 61
