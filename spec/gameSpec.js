describe("Game", function() {
    beforeEach(function() {
        game = new Game(500, 500);
    });
    
    describe("#new", function() {
        it("has a default text", function() {
            expect(game.text).toEqual('Welcome to flappy box, try and get the box through the barriers. Click to start!');
        });
        
        it("starts with a score of 0", function() {
            expect(game.score).toEqual(0);
        });

        it("starts paused", function() {
            expect(game.state).toEqual("paused");
        });

        it("starts with a given width", function() {
            expect(game.width).toEqual(500);
        });

        it("starts with a given height", function() {
            expect(game.height).toEqual(500);
        });

        it("starts with a box", function() {
            expect(typeof game.box).toEqual('object');
            expect(game.box).toEqual(new Box(game));
        });

        it("starts with a barrier", function() {
            expect(typeof game.barrier).toEqual('object');
            expect(game.barrier).toEqual(new Barrier(game));
        });
    });

    describe("#draw", function() {
        it("calls update on barrier", function() {
            expect(game.barrier.x).toEqual(game.width);
            game.draw();
            expect(game.barrier.x).toEqual(496);
        });
    });
});
