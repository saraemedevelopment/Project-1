
function Player(x, y, nombre) {
  this.x = x;
  this.y = y;
  this.speed = 5;
  this.element = $("<div>").attr("class", nombre);
  this.element.css({top:this.y, left:this.x, position:"absolute"});
  $("#board").append(this.element);

};


Player.prototype.moveRight = function(){
  if(this.x <= $('#board').width()-25){
    console.log("right", player.x);
    this.x += this.speed;
  }
};
Player.prototype.moveLeft = function(){
  if(this.x <= 5){
  }
  else{this.x -= this.speed;}
    console.log("left", player.x);
};


Player.prototype.updatePlayer = function(){
  this.x += this.speed;
  this.element.css({top:this.y, left:this.x, position:'absolute'});

  if(this.x >= $("#board").width() || this.x <= 0){
    this.speed *= -1;
  }
};

function update(){
player.updatePlayer();
};

// Player.prototype.moveLeft = function() {
//   this.x -= 10;
//   console.log('left',player.x);
//
// };
//
// Player.prototype.moveRight = function() {
//
//   this.x += 10;
//     console.log('right',player.x);
// };


// function Evil(color, context) {
//   this.x = 0;
//   this.y = 100;
//   this.vx = 5;
//
//
//
// }
//
// Evil.prototype.drawEvil = function() {

//
// };
//
// Evil.prototype.move = function() {

//     this.x += this.vx;

//   if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
//     this.vx *= -1;
//   }
//
// };
