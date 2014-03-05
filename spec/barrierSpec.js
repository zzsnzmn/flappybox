describe("Barrier", function() {
    beforeEach(function() {
        game = new Game(500, 500);
        barrier = new Barrier(game);
    });

    describe("#new", function() {
        it("starts with x equal to game width", function() {
            expect(barrier.x).toEqual(game.width);
        });

        it("starts with barrier width of 40", function() {
            expect(barrier.w).toEqual(40);
        });

        it("has an initial barrier height of 100", function() {
            expect(barrier.h).toEqual(100);
        });

        it("has a maxY value that equals game height", function() {
            expect(barrier.maxY).toEqual(game.height);
        });

        it("has an initial offset of 40", function() {
            expect(barrier.offset).toEqual(40);
        });
    });

    describe("#checkCollisions", function() {
    });
});
