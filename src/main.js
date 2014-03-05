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

var game = new Game(canvas.height, canvas.width);

// add a click handler
function onClick(e) {
    if (game.state !== "paused") {
        game.box.dy = -8;
    } else {
        game.start();
    }
}
canvas.addEventListener('mousedown', onClick, false);

// begin animating...
// create a callback for animate
function animate() {
    requestAnimFrame(animate);
    if (game.state === "paused") {
        game.displayMenu();
    } else {
        game.draw();
    }
}

animate();
