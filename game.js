// animation shim, callbacks :S
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
                                window.setTimeout(callback, 1000 / 60);
                                        };
})();

// end up drawing on the canvas object
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 450;

// create a callback for animate
function animate() {
    requestAnimFrame(animate);
    if (game.state === "paused") {
        game.displayMenu();
    } else {
        game.draw();
    }
}

// container object for the game logic
var game = {}

game.state = 'paused'  // game has 2 states, paused and active
game.text = 'Welcome to flappy box, try and get the box through the barriers. Click to start!'  // default text
game.score = 0

game.displayMenu = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(game.text, 30, 30);
}

game.start = function() {
    game.state = "active"
}

/*
Attach a barrier object to "game" container
*/
game.barrier = {x: 0,
                w: 40,
                h: 100,
                offset: 40}

game.barrier.draw = function() {
    ctx.fillRect(this.x, 0, this.w, this.offset);
    ctx.fillRect(this.x, this.offset + this.h, this.w, 450);
}

game.barrier.update = function() {
    this.x -= 4;
    if (this.x < 0) {
        this.reset(); // barrier hit the left side
    }
}

game.barrier.reset = function() {
    this.x = canvas.width;
    this.offset = Math.floor((Math.random()*300)+30);
    game.score += 1;    
}


/*
Attach a bird object to the "game" container
*/
game.bird = {x: 30,
             y: canvas.height/2,
             dy: 0,
             score: 0};

game.bird.update = function() {
    this.y += this.dy;
    // pretty abysmal gravity simulation
    if (this.dy < 8) {
            this.dy += .4;
    }
    this.checkCollisions();
}

game.bird.checkCollisions = function() {
    if (this.x >= game.barrier.x && this.x <= game.barrier.x + game.barrier.w) {
        if (this.y <= game.barrier.offset ||
            this.y + 20 >= game.barrier.offset + game.barrier.h) {
            game.barrier.x = canvas.width;
            this.dy = 0;
            this.y = canvas.height/2;
            game.text = "YOU LOSE! Final score: " + game.score + " click to play again!"
            game.barrier.reset();
            game.state = "paused";
            game.score = 0;
        }
    }    
}

game.bird.draw = function() {
    ctx.fillRect(this.x, this.y, 20, 20);
}

game.draw = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";

    this.barrier.update();
    this.bird.update();

    this.barrier.draw();
    this.bird.draw();
}


// add a click handler
function onClick(e) {
    if (game.state !== "paused") {
        game.bird.dy = -8;
    } else {
        game.start();
    }
}
canvas.addEventListener('mousedown', onClick, false);

// begin animating...
animate();
