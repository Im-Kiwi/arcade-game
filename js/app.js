// Enemies our player must avoid
class Enemy {
    constructor (x,y,speed) {

    this.x= x;
    this.y=y;
    this.speed= speed;
    this.sprite = 'images/enemy-bug.png';
    }

    update (dt) {
      this.x+=this.speed*dt;                                        // this will make the speed of enemy same in all PC
      if(this.x>=505) {                                             //enemies position
        this.x=-50;
        this.speed= 100+ Math.floor(Math.random() *450);            // random speed of enemies
      }
      if(player.x<this.x+70 && player.x+70>this.x && player.y<this.y+40 && player.y+40>this.y) {   //it will make sure that the player's positon reset when it collide with the enemy
        player.x=200;
        player.y=400;
      }

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);            //it will render the enemies
    };
}


//player class
class Player {
  constructor(x,y) {
    this.x= x;
    this.y= y;
    this.sprite= 'images/char-boy.png';
  }

  handleInput(k) {                                    //input given by the user through arrow keys of keyboard
    if(k==='right' && this.x<400) {
      this.x+= 101;
    }

    if(k=== 'left' && this.x>0) {
      this.x-= 101;
    }

    if(k=== 'up' && this.y>0) {
      this.y-= 85;
    }
    if(k=== 'down' && this.y<400) {
      this.y+=85;
    }
  }

  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);            //it will render the player image
  };

  update() {
      if(this.y<0){                             //player will reset its position after the game finishes.
        setTimeout(() => {
         {
            this.x=200;
            this.y=400;
          }
        }, 500);
      }
    }
}

 let allEnemies= [];
 let player= new Player(200,400);
 let enemyPos= [60,145,230];


 enemyPos.forEach(function(y) {                       // enemies will appear in the canvas
   let enemy= new Enemy(0,y,450);
   allEnemies.push(enemy);
 });




// This listens for key presses and sends the keys to your Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

