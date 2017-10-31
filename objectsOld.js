var canvas = document.getElementById('canvas');
var ctx = this.canvas.getContext('2d');


function Player(x, y, nombre) {
  this.x = x;
  this.y = y;
  this.element = $("<div>").attr("class", nombre);
  this.element.css({top:this.y, left:this.x, position:"absolute"});
  $("#board").append(this.element);
  // this.x = x;
  // this.y = y;
  // this.context = context;
};

Player.prototype.drawPlayer = function() {
  ctx.fillStyle = "black";
  ctx.fillRect(225, 380, 50, 20);

};

Player.prototype.update = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawPlayer();
  this.x += this.vx;
  if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
    this.vx *= -1;
  }

};

Player.prototype.moveLeft = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawPlayer();
  this.x -= 10;
  console.log('left',player.x);

};

Player.prototype.moveRight = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawPlayer();
  this.x += 10;
    console.log('right',player.x);
};
//
//
// Player.prototype.shoot = function () {
//       console.log('shooting');
//
//       bullet
//       x,
//       y,
//       vy
//
//       ctx.fillStyle = "black";
//       ctx.fillRect(this.x, this.y, 5, 20);
//
//
// };

// function Evil(color, context) {
//   this.x = 0;
//   this.y = 100;
//   this.vx = 5;
//   this.color = color;
//   this.context = context;
//
//
// }
//
// Evil.prototype.drawEvil = function() {
//   // console.log(this);
//   ctx.fillStyle = this.color;
//   ctx.fillRect(0, 100, 20, 100);
//
// };
//
// Evil.prototype.move = function() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//     this.x += this.vx;
//   this.drawEvil();
//   if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
//     this.vx *= -1;
//   }
//
// };
