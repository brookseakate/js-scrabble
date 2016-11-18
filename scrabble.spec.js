var Scrabble = require('./scrabble');

describe('Scrabble', function() {
  it('is working', function() {
    expect(true).toBe(true);
  });

  it('.highestScoreFrom should return false if no plays yet', function() {
    var scrabble = new Scrabble();
    expect(scrabble.highestScoreFrom([])).toBe(false);
  });
});
