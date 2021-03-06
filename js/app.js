// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y = 150;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, speedVal) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    yPos = [154, 236, 72];
    if (this.x <= 505){
        this.x = Math.floor(this.x + speedVal * dt);
    } else{
        this.x = -95;
        this.y = yPos[Math.floor(Math.random() * yPos.length)];
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 400;
    this.player = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    this.dt = dt;
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
Player.prototype.handleInput = function(keyCode) {
    if (keyCode == 'up'){
        if (this.y >= 100){
            this.y -= 82;
        } else {
            this.x = 200;
            this.y = 400;
        }
    }
    if (keyCode == 'down'){
        if (this.y <= 350) {
            this.y += 82;
        }
    }
    if (keyCode == 'left'){
        if (this.x >= 100) {
            this.x -= 100;
        }
    }
    if (keyCode == 'right'){
        if (this.x <= 350) {
            this.x += 100;
        }
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [(new Enemy), (new Enemy), (new Enemy)];
var player = new Player;

var checkCollisions = function() {
    allEnemies.forEach(function(enemy){
        if (player.y == enemy.y && player.x >= (enemy.x -75) && player.x <= (enemy.x+75)) {
            player.x = 200;
            player.y = 400;
        }
    });
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
