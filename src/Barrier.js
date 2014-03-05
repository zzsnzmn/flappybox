/*
Barrier object
*/
function Barrier(game) {
    this.x = 0;
    this.w = 40;
    this.h = 100;
    this.maxY = game.height;  // max bounds for the canvas
    this.offset = 40;  // the opening flappy box can fit through
}

Barrier.prototype.draw = function() {
    ctx.fillRect(this.x, 0, this.w, this.offset);
    ctx.fillRect(this.x, this.offset + this.h, this.w, this.maxY);
}

Barrier.prototype.update = function(game) {
    this.x -= 4;
    if (this.x < 0) {
        this.reset(game); // barrier hit the left side
    }
}

Barrier.prototype.reset = function(game) {
    this.x = canvas.width;
    this.offset = Math.floor((Math.random()*300)+30);
    game.score += 1;
}
