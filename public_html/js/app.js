/* global ctx, global */


var gameStatus = "play";

var level1markers = {
    block1 : {
    x1 : -10,
    x2 : 392,
    y1 : 514,
    y2 : 517
    },
    block2 : {
    x1 : 392,
    x2 : 413,
    y1 : 514,
    y2 : 517
    },
    block3 : {
    x1 : 413,
    x2 : 515,
    y1 : 514,
    y2 : 517
    },
    block4 : {
    x1 : 392,
    x2 : 413,
    y1 : 368,
    y2 : 515
    },
    block5 : {
    x1 : 392,
    x2 : 413,
    y1 : 260,
    y2 : 368
    },
    block6 : {
    x1 : 413,
    x2 : 515,
    y1 : 260,
    y2 : 368
    },
    block7 : {
    x1 : 421,
    x2 : 515,
    y1 : 222,
    y2 : 260
    },
    block8 : {
    x1 : 392,
    x2 : 421,
    y1 : 189,
    y2 : 260
    },
    block9 : {
    x1 : 295,
    x2 : 392,
    y1 : 189,
    y2 : 295
    },
    block10 : {
    x1 : 229,
    x2 : 421,
    y1 : 145,
    y2 : 189
    },
    block11 : {
    x1 : -10,
    x2 : 229,
    y1 : 145,
    y2 : 189
    },
    block12 : {
    x1 : -10,
    x2 : 229,
    y1 : 35,
    y2 : 145
    },
    block13 : {
    x1 : -10,
    x2 : 229,
    y1 : -15,
    y2 : 35
    },
    block14 : {
    x1 : 229,
    x2 : 476,
    y1 : -15,
    y2 : 35
    },
    block15 : {
    x1 : 476,
    x2 : 515,
    y1 : -15,
    y2 : 35
    },
    block16 : {
    x1 : 476,
    x2 : 515,
    y1 : -50,
    y2 : -15
    }
};

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



function Levelblocks() {
  this.blocks = {};
}

Levelblocks.prototype.addBlock = function(left, right, up, down) {
  var numOfBlocks = Object.keys(this.blocks).length + 1;
  this.blocks['block' + numOfBlocks] = new Block(left, right, up, down);
};

var level2Blocks = new Levelblocks();

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


var level1Blocks = new Levelblocks();


var Enemy = function(x1, x2, y1, y2, rate) {
    this.x = x1 +20;
    this.y = (y1+y2)/2;
    this.rate =  rate;
    this.direction = "right";
    this.x1 = x1;
    this.x2 = x2;
    this.sprite = 'images/enemy-bug.png';
    this.width = 40;
    this.height = 20;
};

Enemy.prototype.picture = function() {
    if (this.direction === "right") {
        this.sprite = 'images/enemy-bug.png';
    }
    else if (this.direction === "left") {
        this.sprite = 'images/enemy-bug-left.png';
    }
};
Enemy.prototype.location = function() {
    if(this.x > this.x2) {
        this.direction = "left";
    }else if ((this.x-8) < this.x1) {
        this.direction = "right";
    }
};

Enemy.prototype.move = function(dt) {
    if(this.direction === "left"){
        this.x = this.x - (dt * this.rate);
    }else if (this.direction === "right"){
        this.x = this.x + (dt * this.rate);
    }
};

Enemy.prototype.update = function(dt) {
    this.location();
    this.picture();
    this.move(dt);
};

Enemy.prototype.render = function(now) {
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


};



var Player = function() {
    this.x = 0;
    this.y = 515;
    this.sprite = 'images/char-pink-girl.png';
    this.reset();
    this.state = "stand";
    this.location = "block1";
    this.width =20;
    this.height =40;
    this.lifeCount = 1;
    this.keyStatus = 0;
    this.immortal = 0;
    this.level = "level1";
    this.levelMarkers = level1markers;
    this.levelBlocks = level1Blocks;
};

Player.prototype.update = function(dt, now) {
    this.move(dt);
    this.checkLocation();
    this.picUpdate(dt);
};



// && (this.x-3) > this.levelBlocks.blocks[this.location].left
//  && (this.x+3) <  this.levelBlocks.blocks[this.location].right
//  && (this.y+3) < this.levelBlocks.blocks[this.location].down
//   && (this.y-3) > this.levelBlocks.blocks[this.location].up

Player.prototype.move = function(dt) {

   if(this.state === "move_left"
          ){

       this.x = this.x - (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
  if(this.state === "move_right"
        ){
       this.x = this.x + (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
  if(this.state === "move_down"
        ){
       this.y = this.y + (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
  if(this.state === "move_up"
          ){
       this.y = this.y - (dt * 180);
       console.log(this.x, this.y);
       console.log(this.location);
   }
};

Player.prototype.picUpdate = function(dt) {

    if (this.immortal > (Date.now()/1000)){
        this.sprite = 'images/char-pink-girl-immortal.png';
    } else{
        if (keyBlock18.status === "picked") {
            this.sprite = 'images/char-pink-girl-holding.png';
        }else if (keyBlock18.status === "onground") {
            this.sprite = 'images/char-pink-girl.png';
    }
    }

};


Player.prototype.reset = function() {
    if (this.lifeCount === 0){
    this.x = 503;
    this.y = 460;
    keyBlock18.status = "onground";}
    else if(this.lifeCount > 0) {
        this.immortal = (Date.now()/1000) +2;
        this.lifeCount = this.lifeCount-1;
    }
};



Player.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.checkLocation = function() {
        for(var each in this.levelMarkers) {
            if(this.x > this.levelMarkers[each].x1 && this.x < this.levelMarkers[each].x2 &&
                this.y > this.levelMarkers[each].y1 && this.y<this.levelMarkers[each].y2) {
                    this.location = each;
                    break;
                                    }
        }
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



var Heart = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite =  'images/Heart.png';
    this.width =40;
    this.height =40;
    this.status ="onground";
    this.renederStatus = "yes";
};

Heart.prototype.render = function() {
 if(this.renederStatus === "yes") {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
};

Heart.prototype.update = function() {
    this.checkStatus();
};

Heart.prototype.checkStatus = function() {
    if (this.status === "picked" && this.renederStatus === "yes") {
        player.lifeCount = player.lifeCount + 1;
        this.renederStatus = "no";
    }
};

var LifeCounter = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite =  'images/Heart.png';
    this.count = 0 + " x ";
};

LifeCounter.prototype.render = function() {
    ctx.font = "40px Arial Black";
    ctx.fillStyle = "white";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.fillText(this.count,this.x -50,this.y+125);
    ctx.strokeText(this.count,this.x -50,this.y+125);
};

LifeCounter.prototype.update = function() {
    this.count = player.lifeCount + " x ";
};


var Key = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite =  'images/Key.png';
    this.width =20;
    this.height =50;
    this.status ="onground";
    this.renederStatus = "yes";
};

Key.prototype.render = function() {
    if(this.renederStatus === "yes") {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}
};

Key.prototype.update = function() {
    this.checkStatus();
};

Key.prototype.checkStatus = function() {
    if (this.status === "picked") {
        player.keyStatus = 1;
        this.renederStatus = "no";
    }else if (this.status === "onground") {
        player.keyStatus = 0;
        this.renederStatus = "yes";
    }
};


var emenyBlock52 = new Enemy(level2markers.block5.x1,level2markers.block2.x2-10,level2markers.block5.y1+20,level2markers.block5.y2,180);
var emenyBlock8 = new Enemy(level2markers.block8.x1,level2markers.block9.x2,level2markers.block8.y1-20,level2markers.block8.y2,220);
var emenyBlock1215 = new Enemy(level2markers.block12.x1,level2markers.block15.x2,level2markers.block13.y1+20,level2markers.block13.y2,245);


var allEnemies2 = [emenyBlock52,emenyBlock8,emenyBlock1215];
var allEnemies1 = [];
var allEnemies = [];

var heartBlock7 = new Heart(5, 325);
var keyBlock18 = new Key(391,250);
var player = new Player();


var iteams2 = [heartBlock7,keyBlock18];
var iteams1 = [];
var iteams =[];



var lifeCounter = new LifeCounter(70,-55);
var lifeCounter2 = new LifeCounter(500,-65);