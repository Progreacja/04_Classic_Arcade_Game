/* global ctx, canvasW, canvasH */
var newX;
var newY;
var block;

var level2markers = {
    block1 : {
    x1 : 478,
    x2 : 510,
    y1 : 420,
    y2 : 510
    },
    block2 : {
    x1 : 478,
    x2 : 515,
    y1 : 373,
    y2 : 420},
    block3 : {
    x1 : 228,
    x2 : 478,
    y1 : 373,
    y2 : 420},
    block4 : {
    x1 : 173,
    x2 : 228,
    y1 : 373,
    y2 : 420},
    block5 : {
    x1 : -10,
    x2 : 173,
    y1 : 373,
    y2 : 420},
    block6 : {
    x1 : 173,
    x2 : 228,
    y1 : 303,
    y2 : 373},
    block7 : {
    x1 : -10,
    x2 : 132,
    y1 : 303,
    y2 : 344},
    block8 : {
    x1 : -10,
    x2 : 173,
    y1 : 206,
    y2 : 303},
    block9 : {
    x1 : 173,
    x2 : 228,
    y1 : 206,
    y2 : 303},
    block10 : {
    x1 : 173,
    x2 : 228,
    y1 : 111,
    y2 : 206},
    block11 : {
    x1 : 173,
    x2 : 228,
    y1 : 20,
    y2 : 111},
    block12 : {
    x1 : -10,
    x2 : 173,
    y1 : -35,
    y2 : 111},
    block13 : {
    x1 : 34,
    x2 : 249,
    y1 : -35,
    y2 : 20},
    block14 : {
    x1 : 249,
    x2 : 455,
    y1 : -35,
    y2 : 20},
    block15 : {
    x1 : 455,
    x2 : 515,
    y1 : -35,
    y2 : 20},
    block16 : {
    x1 : 455,
    x2 : 515,
    y1 : 20,
    y2 : 206},
    block17 : {
    x1 : 455,
    x2 : 515,
    y1 : 206,
    y2 : 265},
    block18 : {
    x1 : 371,
    x2 : 515,
    y1 : 206,
    y2 : 265}



};


function Block(left, right, up, down) {
  this.left = left || -10;
  this.right = right || 515;
  this.up = up || -35;
  this.down = down || 510;
}



function Level2blocks() {
  this.blocks = {};
}

Level2blocks.prototype.addBlock = function(left, right, up, down) {
  var numOfBlocks = Object.keys(this.blocks).length + 1;
  this.blocks['block' + numOfBlocks] = new Block(left, right, up, down);
};

var level2Blocks = new Level2blocks();

//block1
level2Blocks.addBlock(478, 510, undefined, 510);

//block2
level2Blocks.addBlock(undefined, 510, 373, undefined);

//block3
level2Blocks.addBlock(undefined, undefined, 373, 420);

//block4
level2Blocks.addBlock(undefined, undefined, undefined, 420);

//block5
level2Blocks.addBlock(-10, undefined, 373, 420);

//block6
level2Blocks.addBlock(173, 228, undefined, undefined);

//block7
level2Blocks.addBlock(-10, 132, undefined, 344);

//block8
level2Blocks.addBlock(-10, undefined, 206, undefined);

//block9
level2Blocks.addBlock(undefined, 228, undefined, undefined);

//block10
level2Blocks.addBlock(173, 228, undefined, undefined);

//block11
level2Blocks.addBlock(undefined, 228, undefined, undefined);

//block12
level2Blocks.addBlock(-10, undefined, -35, 111);

//block13
level2Blocks.addBlock(undefined, undefined, -35, undefined);

//block14
level2Blocks.addBlock(undefined, undefined, -35, 20);

//block15
level2Blocks.addBlock(undefined, 515, -35, undefined);

//block16
level2Blocks.addBlock(455, 515, undefined, undefined);

//block17
level2Blocks.addBlock(undefined, 515, undefined, 265);

//block18
level2Blocks.addBlock(371, undefined, 206, 265);


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
    this.location = "block1";
;
};
var jump = "yes";


Player.prototype.update = function(dt) {

    this.checkLocation();
    this.move(dt);

};





Player.prototype.move = function(dt) {
    block = this.location;
   if(this.state === "move_left"
           && (this.x-3) > level2Blocks.blocks[this.location].left){

       this.x = this.x - (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
  if(this.state === "move_right"
          && (this.x+3) <  level2Blocks.blocks[this.location].right){
       this.x = this.x + (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
  if(this.state === "move_down"
          && (this.y+3) < level2Blocks.blocks[this.location].down){
       this.y = this.y + (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
  if(this.state === "move_up"
           && (this.y-3) > level2Blocks.blocks[this.location].up){
       this.y = this.y - (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
};



Player.prototype.checkCollisions = function() {


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

            this.state = "move_left";
           break;

       case "right":

           this.state = "move_right";
           break;

       case "down":

            this.state = "move_down";
            break;

       case "up":

            this.state = "move_up";
            break;

        case "stand":

            this.state = "stand";
            break;
    }
};

document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'stand',
        38: 'stand',
        39: 'stand',
        40: 'stand'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});





Player.prototype.checkLocation = function() {
        for(var each in level2markers) {
            if(this.x > level2markers[each].x1 && this.x < level2markers[each].x2 &&
                this.y > level2markers[each].y1 && this.y<level2markers[each].y2) {
                    this.location = each;
                    break;
                                    }
        }
};











  var allEnemies = [];


var player = new Player();