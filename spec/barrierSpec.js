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

    describe("#update", function() {
        it("subtracts 4 from x", function() {
            expect(barrier.x).toEqual(500);
            barrier.update(game);
            expect(barrier.x).toEqual(496);
        });

        it("calls reset when x <= 0", function() {
            expect(barrier.x).toEqual(500);
            barrier.x = 0;
            expect(barrier.x).toEqual(0);
            barrier.update(game);
            expect(barrier.x).toEqual(500);
        });

        it("increases game score every reset", function() {
            expect(barrier.x).toEqual(500);
            barrier.x = 0;
            expect(game.score).toEqual(0);
            barrier.update(game);
            expect(game.score).toEqual(1);
        });
    });

    describe("#reset", function() {
        it("resets width", function() {
            barrier.x = 1000;
            expect(barrier.x).toEqual(1000);
            barrier.reset(game);
            expect(barrier.x).toEqual(game.width);
        });

        it("increases game score", function() {
            expect(game.score).toEqual(0);
            barrier.reset(game);
            barrier.reset(game);
            expect(game.score).toEqual(2);
        });
    });
});
