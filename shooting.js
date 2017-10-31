function Bullet(vy){
  this.x = player.x + player.width/2;
  this.y = player.y + player.height/2;
  this.vy = vy;
  this.element = $("<div>").attr("class", "bullet");
  this.element.css({top: this.x, left: this.y});
  $("#board").append(this.element);

}

Bullet.prototype.shoot = function() {
  this.y += this.vy;
  this.element.css({top: this.y,left: this.x});
  console.log("shot");

};


Bullet.prototype.updateShot = function() {
  this.y += this.vy;
  this.element.css({top: this.y,left: this.x});

};
