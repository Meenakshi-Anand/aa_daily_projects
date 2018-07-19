const Asteroid = require('./asteroid.js');

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];
  this.addAsteroids();
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 500;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function() {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext('2d');
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    let asteroid = new Asteroid({pos: this.randomPosition(), game: this});
    this.asteroids.push(asteroid);
    asteroid.draw(ctx);
  }
};


Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * Game.DIM_X);
  let y = Math.floor(Math.random() * Game.DIM_Y);
  return [x,y];
};

Game.prototype.draw = function(ctx) {
  this.clearRect(ctx);
  this.asteroids.forEach( ass => ass.draw(ctx));
};

Game.prototype.clearRect = function(ctx) {
  ctx.fillStyle = '#f0cfbe';
  ctx.fillRect(0, 0, 1000, 500);
};

Game.prototype.moveObjects = function(){
  this.asteroids.forEach( ass => ass.move());
};

Game.prototype.wrap = function(pos){
  if (pos[0] <= 0){
    pos[0] += Game.DIM_X;
  }else if (pos[0] >= Game.DIM_X){
    pos[0] = 0;
  }
  if (pos[1] <= 0){
    pos[1] += Game.DIM_Y;
  }else if (pos[1] >= Game.DIM_Y){
    pos[1] = 0;
  }

  // const dx = Math.abs(pos[0]) % Game.DIM_X;
  // const dy = Math.abs(pos[1]) % Game.DIM_Y;
  return pos;
};

Game.prototype.checkCollisions = function(){
  for (let i = 0; i < this.asteroids.length; i++ ) {
    for (let j = i + 1; j < this.asteroids.length; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) console.log('COLLISION!');
    }
  }
};

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();
};





module.exports = Game;
