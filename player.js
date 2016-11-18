var Scrabble = require('./scrabble');

var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  // @TODO - restrict non-string or empty string Input
  this.plays.push(word);

  // using same logic as from Ruby Scrabble for return value: if won, return false. if not won, return word score
  return ( this.hasWon() === true ) ? false : scrabble.score(word) ;
};

Player.prototype.totalScore = function() {
  var score = 0;
  this.plays.forEach(function(word) {
    score += scrabble.score(word);
  });
  return score;
};

Player.prototype.hasWon = function() {
  if (this.totalScore() > 100) {
    return true;
  } else {
    return false;
  }
};

// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score

module.exports = Player;
