describe("Game", function() {
  beforeEach(function() {
    game = new Game(500, 500);
  });
  it("has a default text", function() {
    expect(game.text).toEqual('Welcome to flappy box, try and get the box through the barriers. Click to start!');
  });
  it("starts with a score of 0", function() {
    expect(game.score).toEqual(0);
  });
});
