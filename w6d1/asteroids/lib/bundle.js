/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./lib/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\n\nfunction Asteroid(options) {\n  MovingObject.call(this, { color: \"red\", radius: 10, pos: options.pos, vel: Util.randomVec(1) , game: options.game});\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\n\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n// const Bullet = require('./bullet.js');\n// const Ship = require('./ship.js');\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Util = Util;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 500;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = '#f0cfbe';\n  ctx.fillRect(0, 0, 1000, 500);\n\n  let gameView = new GameView(ctx);\n  gameView.start();\n\n});\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.bullets = [];\n  this.ships = [];\n  this.addAsteroids();\n}\n\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 500;\nGame.FPS = 32;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.addAsteroids = function() {\n  const canvasEl = document.getElementById('game-canvas');\n  const ctx = canvasEl.getContext('2d');\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let asteroid = new Asteroid({pos: this.randomPosition(), game: this});\n    this.asteroids.push(asteroid);\n    asteroid.draw(ctx);\n  }\n};\n\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * Game.DIM_X);\n  let y = Math.floor(Math.random() * Game.DIM_Y);\n  return [x,y];\n};\n\nGame.prototype.draw = function(ctx) {\n  this.clearRect(ctx);\n  this.asteroids.forEach( ass => ass.draw(ctx));\n};\n\nGame.prototype.clearRect = function(ctx) {\n  ctx.fillStyle = '#f0cfbe';\n  ctx.fillRect(0, 0, 1000, 500);\n};\n\nGame.prototype.moveObjects = function(){\n  this.asteroids.forEach( ass => ass.move());\n};\n\nGame.prototype.wrap = function(pos){\n  if (pos[0] <= 0){\n    pos[0] += Game.DIM_X;\n  }else if (pos[0] >= Game.DIM_X){\n    pos[0] = 0;\n  }\n  if (pos[1] <= 0){\n    pos[1] += Game.DIM_Y;\n  }else if (pos[1] >= Game.DIM_Y){\n    pos[1] = 0;\n  }\n\n  // const dx = Math.abs(pos[0]) % Game.DIM_X;\n  // const dy = Math.abs(pos[1]) % Game.DIM_Y;\n  return pos;\n};\n\nGame.prototype.checkCollisions = function(){\n  for (let i = 0; i < this.asteroids.length; i++ ) {\n    for (let j = i + 1; j < this.asteroids.length; j++) {\n      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) alert('COLLISION!');\n    }\n  }\n};\n\nGame.prototype.step = function(){\n  this.moveObjects();\n  this.checkCollisions();\n};\n\n\n\n\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\nfunction GameView(ctx){\n  this.context = ctx;\n  this.game = new Game();\n}\n\n\nGameView.prototype.start = function(){\n  const that = this;\n  setInterval(function(){\n    that.game.step();\n    that.game.draw(that.context);\n  },20);\n\n};\n\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n   this.pos[0],\n   this.pos[1],\n   this.radius,\n   0,\n   2 * Math.PI,\n   false\n );\n\n ctx.fill();\n\n};\n\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  const centerDist = Math.sqrt(Math.pow((this.pos[0]-otherObject.pos[0]),2)+Math.pow((this.pos[1]-otherObject.pos[1]),2));\n  return (this.radius + otherObject.radius) > centerDist;\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    //...\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });