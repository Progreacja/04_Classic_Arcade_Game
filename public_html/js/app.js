/* global ctx, canvasW, canvasH */
var newX;
var newY;

var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.rate =  100 + Math.floor(Math.random() * 150);

    this.sprite = 'images/char-princess-girl.png';

    this.reset();
};

Enemy.prototype.reset = function() {
    this.x = -150;
};

Enemy.prototype.update = function(dt) {
    this.x = this.x + (dt * this.rate);
    if (this.x > 700){
    this.x = -100;
  }

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var playerStatus = "notMoving";

var Player = function() {
    this.x = 503;
    this.y = 460;
    this.sprite = 'images/char-pink-girl.png';
    this.reset();
    this.state = "stand";
};
var jump = "yes";


Player.prototype.update = function(dt) {
    this.checkCollisions();
    this.status();
    this.move(dt);

};

Player.prototype.move = function(dt) {
   if(this.state === "move_left"){
       this.x = this.x - (dt * 150);
   }
};

Player.prototype.status = function() {
   if(this.state === "move_left" && newX > this.x){
       this.state = "stand";
   }


};

Player.prototype.checkCollisions = function() {
    if (this.y === -100) {
        // player is on water, reset
        this.reset();
    } else if (this.y >= 60 && this.y <= 220) {
        var self = this;
        // player is on road rows, check collisions
        // loop through each bug
        allEnemies.forEach(function(enemy) {
            // is the bug on the same row as the player?
            if (enemy.y === self.y) {
                // is the bug on the player?
                if (enemy.x >= player.x - 30 && enemy.x <= player.x + 30) {
                    self.reset();
                }
            }
        });
    }
};

Player.prototype.reset = function() {
    this.x = 503;
    this.y = 510;
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



Player.prototype.handleInput = function(key) {
    switch(key){
        case "left":
            newX = this.x - 101;
            this.state = "move_left";

           break;
       case "right":
           if(this.x < (canvasW-103)){
                this.x += 101;
                console.log(this.x,this.y);
           }
           break;
       case "down":
            if(this.y < canvasH-204){
                this.y += 40;
                console.log(this.x,this.y);
           }
           break;
       case "up":
            if(this.y > 0){
                this.y -= 40;
                console.log(this.x,this.y);
           }
           break;
    }
};

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


  var allEnemies = [];


var player = new Player();