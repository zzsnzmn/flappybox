describe("Game", function() {
    beforeEach(function() {
        game = new Game(500, 500);
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
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
            game.draw(ctx);
            expect(game.barrier.x).toEqual(496);
        });

        it("calls update on box", function() {
            expect(game.box.y).toEqual(game.height/2);
            expect(game.box.dy).toEqual(0);
            game.draw(ctx);
            expect(game.box.y).toEqual(game.height/2); // dy was 0
            expect(game.box.dy).toEqual(.4);
            game.draw(ctx);
            expect(game.box.y).toEqual(250.4); // dy was 0
            expect(game.box.dy).toEqual(.8);

        });
    });
});
