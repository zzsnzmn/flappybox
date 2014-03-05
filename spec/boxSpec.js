describe("Box", function() {
  beforeEach(function() {
    game = new Game(500, 500);
    box = new Box(game);
  });

  describe("#new", function() {
      it("starts with y half as big as game.height", function() {
          expect(box.y).toEqual(game.height/2);
      });

      it("has an x value of 30", function() {
          expect(box.x).toEqual(30);
      });

      it("has an initial dy of 0", function() {
          expect(box.dy).toEqual(0);
      });
      
      it("has an initial height of 20", function() {
          expect(box.height).toEqual(20);
      });
  });

  describe("#update", function() {
      it("adds .4 to dy", function() {
          expect(box.dy).toEqual(0);
          box.update(game);
          expect(box.dy).toEqual(.4);
      });

      it("won't increment dy if 8 or more", function() {
          box.dy = 8;
          box.update(game);
          expect(box.dy).toEqual(8);
          box.dy = 7.9;
          box.update(game);
          expect(box.dy).toEqual(8.3);
          box.update(game);
          expect(box.dy).toEqual(8.3);
      });
      // could add something to see that check collisions is called here...
  });

  describe("#checkCollisions", function() {
      it("does nothing if box x/y does not intersect with barrier", function() {
          box.checkCollisions(game);
          expect(box.x).toEqual(30);
          expect(game.score).toEqual(0);
      });

      it("resets game score and dy if there is a collision", function() {
          box.y = 30; // put in range of barrier offset
          box.dy = 4; // put in range of barrier offset
          game.barrier.x = 20; // put barrier on top of box
          game.score = 2;
          expect(box.dy).toEqual(4);
          expect(game.score).toEqual(2);
          expect(game.text).toEqual("Welcome to flappy box, try and get the box through the barriers. Click to start!");
          box.checkCollisions(game);
          expect(box.dy).toEqual(0);
          expect(game.score).toEqual(0);
          expect(game.text).toEqual("YOU LOSE! Final score: 2 click to play again!");
      });

      it("resets barrier x value if there is a collision", function() {
          box.y = 30; // put in range of barrier offset
          box.dy = 4; // put in range of barrier offset
          game.barrier.x = 20; // put barrier on top of box
          expect(game.barrier.x).toEqual(20);
          box.checkCollisions(game);
          expect(game.barrier.x).toEqual(game.width);
      });

      it("pauses if there is a collision", function() {
          box.y = 30; // put in range of barrier offset
          box.dy = 4; // put in range of barrier offset
          game.barrier.x = 20; // put barrier on top of box
          game.state = "active"; 
          expect(game.state).toEqual("active");
          box.checkCollisions(game);
          expect(game.state).toEqual("paused");
      });
  });
});
