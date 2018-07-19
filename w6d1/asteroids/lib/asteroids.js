const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
// const Bullet = require('./bullet.js');
// const Ship = require('./ship.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Util = Util;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1000;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = '#f0cfbe';
  ctx.fillRect(0, 0, 1000, 500);

  let gameView = new GameView(ctx);
  gameView.start();

});
