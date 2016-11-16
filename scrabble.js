var Player = require('./player');

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

// @TODO - limit word length?
// score(word): returns the total score value for the given word.
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


// @TODO - handle empty array?
// @TODO - handle non-strings in array?
// highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var high_word = arrayOfWords[0];
  var high_score = this.score(high_word);

  for (i = 1; i < arrayOfWords.length; i++) {
    var check_word = arrayOfWords[i];
    var check_score = this.score(check_word);
    var check_length = check_word.length;

    if (check_score > high_score || (check_score === high_score && (check_length === 7 || check_length < high_word.length))) {
      high_word = check_word;
      high_score = check_score;
    }
  }
  return high_word;
};

module.exports = Scrabble;

// // @TODO - move TESTS to jasmine
var s = new Scrabble();

console.log("\n-------------------------------------------");
console.log("TESTS");
console.log("-------------------------------------------");

console.log("\nBONUS and SCORE");
console.log("-------------------------------------------");
console.log("'cAt' bonus should be 0. Bonus is: " + s.bonus("cAt")); // bonus: 0
console.log("'cAt' score should be 5. Score is: " + s.score("cAt")); // score: 5
console.log("'koala' bonus should be 0. Bonus is: " + s.bonus("koala")); // bonus: 0
console.log("'koala' score should be 9. Score is: " + s.score("koala")); // score: 9
console.log("'MUZJIKS' bonus should be 50. Bonus is: " + s.bonus("MUZJIKS")); // bonus: 50
console.log("'MUZJIKS' score should be 79 with bonus. Score is: " + s.score("MUZJIKS")); // score: 79
console.log("'aBieTiC' bonus should be 50. Bonus is: " + s.bonus("aBieTiC")); // bonus: 50
console.log("'aBieTiC' score should be 61 with bonus. Score is: " + s.score("aBieTiC")); // score: 61
console.log("-------------------------------------------");

console.log("\nHIGHEST SCORING WORD");
console.log("-------------------------------------------");

console.log(">>>>> Single high score should win.");
console.log("Input: ['CAT', 'COW', 'LIONESS']. Winner should be: 'LIONESS'");
console.log(">> TEST: Winner is: " + s.highestScoreFrom(['CAT', 'COW', 'LIONESS']));
console.log();

console.log(">>>>> With tied high scores, 7-letter word should should win.");
console.log("Input: ['CAT', 'QQQQQJ', 'AAAAAAG']. Winner should be: 'AAAAAAG'");
console.log(">> TEST: Winner is: " + s.highestScoreFrom(['CAT', 'QQQQQJ', 'AAAAAAG']));
console.log("'QQQQQJ' score: " + s.score('QQQQQJ'));
console.log("'AAAAAAG' score: " + s.score('AAAAAAG'));
console.log();

console.log(">>>>> With tied high scores & no 7-letter word, fewest letters should win.");
console.log("Input: ['CAT', 'QQQQBK', 'QQQQJ']. Winner should be: 'QQQQJ'");
console.log(">> TEST: Winner is: " + s.highestScoreFrom(['CAT', 'QQQQBK', 'QQQQJ']));
console.log("'QQQQBK' score: " + s.score('QQQQBK'));
console.log("'QQQQJ' score: " + s.score('QQQQJ'));
console.log();

console.log(">>>>> With tied high scores of same length & no 7-letter word, first entry should win.");
console.log("Input: ['CAT', 'QQQQJ', 'QQQQX']. Winner should be: 'QQQQJ'");
console.log(">> TEST: Winner is: " + s.highestScoreFrom(['CAT', 'QQQQJ', 'QQQQX']));
console.log("'QQQQJ' score: " + s.score('QQQQJ'));
console.log("'QQQQX' score: " + s.score('QQQQX'));
console.log();
//
// console.log(">>>>> ");
// console.log();
// console.log();
// console.log();
//
// console.log(">>>>> ");
// console.log();
// console.log();
// console.log();
//
// console.log(">>>>> ");
// console.log();
// console.log();
// console.log();
//
// console.log(">>>>> ");
// console.log();
// console.log();
// console.log();
//
// console.log(">>>>> ");
// console.log();
// console.log();
// console.log();
