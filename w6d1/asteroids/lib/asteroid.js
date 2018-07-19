const Util = require("./util");
const MovingObject = require("./moving_object");

function Asteroid(options) {
  MovingObject.call(this, { color: "red", radius: 10, pos: options.pos, vel: Util.randomVec(1) , game: options.game});
}

Util.inherits(Asteroid, MovingObject);





module.exports = Asteroid;
