var Player = require('./player');

describe('Player', function() {
  it('is working', function() {
    expect(true).toBe(true);
  });

  it('should be able to instantiate a new Player and return name', function() {
    var player = new Player("Annalise");
    expect(player.name).toEqual("Annalise");
  });

  it('should be able to instantiate a new Player and return name', function() {
    var player = new Player("Annalise");
    expect(player.name).toEqual("Annalise");
  });

  // // @TODO - don't allow null name
  xit('should not be able to instantiate a new Player without name', function() {
    var player = new Player();
    // throw errro
  });

  it("should be able to play a new word if Player hasn't already won; word score should be returned", function() {
    var player = new Player("Annalise");
    expect(player.plays).toEqual([]);
    expect(player.play("cat")).toEqual(5);
    expect(player.plays).toEqual(["cat"]);
  });

  it('.play should return false if player has already won', function() {
    var player = new Player("Annalise");
    player.plays = ["cat", "MUZJIKS", "JX"]; // totalScore() = 100
    expect(player.hasWon()).toBe(false);
    expect(player.play("a")).toBe(false);
    expect(player.hasWon()).toBe(true);
  });

  it('.totalScore() should return 0 if no words played', function() {
    var player = new Player("Annalise");
    expect(player.totalScore()).toEqual(0);
  });


  it('.totalScore() should return correct score if plays > 0', function() {
    var player = new Player("Annalise");
    expect(player.totalScore()).toEqual(0);
    player.play("cat");
    expect(player.totalScore()).toEqual(5);
    player.play("MUZJIKS");
    expect(player.totalScore()).toEqual(84);
  });

  it('.hasWon() should return false if score <= 100', function() {
    var player = new Player("Annalise");
    expect(player.totalScore()).toEqual(0);
    expect(player.hasWon()).toBe(false);
    player.play("cat"); // totalScore() = 5
    expect(player.hasWon()).toBe(false);
    player.play("MUZJIKS"); // totalScore() = 84
    expect(player.hasWon()).toBe(false);
    player.play("JX"); // totalScore() = 100
    expect(player.totalScore()).toEqual(100);
    expect(player.hasWon()).toBe(false);
  });

  it('.hasWon() should return true if score > 100', function() {
    var player = new Player("Annalise");
    expect(player.totalScore()).toEqual(0);
    expect(player.hasWon()).toBe(false);
    player.plays = ["cat", "MUZJIKS", "QZ"]; // totalScore() = 104
    expect(player.totalScore()).toEqual(104);
    expect(player.hasWon()).toBe(true);
  });

  // it('is working', function() {
  //   expect(true).toBe(true);
  // });
  //

  // it('is working', function() {
  //   expect(true).toBe(true);
  // });
  //
  //
});
