const Game = require('./game.js');


function GameView(ctx){
  this.context = ctx;
  this.game = new Game();
}


GameView.prototype.start = function(){
  const that = this;
  setInterval(function(){
    that.game.step();
    that.game.draw(that.context);
  },20);

};


module.exports = GameView;
