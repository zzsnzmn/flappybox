// Container class for game stats and objects
function Game(height, width) {
    this.height = height;
    this.width = width;
    this.state = "paused";
    this.text = "Welcome to flappy box, try and get the box through the barriers. Click to start!";
    this.score = 0;
    this.box = new Box(this);
    this.barrier = new Barrier(this);
}

Game.prototype.displayMenu = function() {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillText(this.text, 30, 30);    
}

Game.prototype.start = function() {
    this.state = "active"
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = "black";

    this.barrier.update(this);
    this.box.update(this);

    this.barrier.draw(ctx);
    this.box.draw(ctx);
}

