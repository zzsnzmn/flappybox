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
  });
});
