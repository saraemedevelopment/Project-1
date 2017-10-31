function Player(x, y) {
  this.x = x;
  this.y = y;
  this.vx = 10;
  this.element = $("<div>").attr("class", "player");
  this.element.css({
    top: this.y,
    left: this.x
  });
  $("#board").append(this.element);

};


Player.prototype.moveRight = function() {
  if (this.x <= $('#board').width() - 25) {
    console.log("right", player.x);
    this.x += this.vx;
  }
};

Player.prototype.moveLeft = function() {
  if (this.x <= 5) {} else {
    this.x -= this.vx;
  }
  console.log("left", player.x);
};

Player.prototype.shoot = function () {
  console.log("shooting");

};
Player.prototype.updatePlayer = function(){
  this.element.css({top:this.y, left:this.x, position:'absolute'});

  if(this.x >= $("#board").width() || this.x <= 0){
    this.vx *= -1;
  }
};
