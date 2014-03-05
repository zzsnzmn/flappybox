/*
Attach a bird object to the "game" container
*/
function Box(game) {
    this.x = 30;
    this.y = game.height/2;
    this.dy = 0;
    this.height = 20;
}

Box.prototype.update = function(barrier, game) {
    this.y += this.dy;
    // pretty abysmal gravity simulation
    if (this.dy < 8) {
        this.dy += .4;
    }
    this.checkCollisions(barrier, game);
}

Box.prototype.checkCollisions = function(game) {
    if (this.x >= game.barrier.x && this.x <= game.barrier.x + game.barrier.w) {
        if (this.y <= game.barrier.offset ||
            this.y + 20 >= game.barrier.offset + game.barrier.h) {
            game.barrier.x = canvas.width;
            this.dy = 0;
            this.y = game.height/2;
            game.text = "YOU LOSE! Final score: " + game.score + " click to play again!"
            game.barrier.reset(game);
            game.state = "paused";
            game.score = 0;
        }
    }    
}

Box.prototype.draw = function() {
    ctx.fillRect(this.x, this.y, this.height, this.height);
}