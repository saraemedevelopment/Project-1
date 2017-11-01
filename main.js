var player = new Player();
var trump = new Evil(8, 5);

$(document).ready(function() {
  setInterval(function() {
    player.updatePlayer(), trump.updateEvil();
    bullets.forEach(bullet => bullet.updateShot());
  }, 1000 / 60);
});

// playFlowers();

var bullets = [];

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
    case 32:
      bullets.push(new Bullet(player.x, player.y));
      bullets[0].collision();
      playSound();
      break;
  };
};

$(".badge").text(trump.lifes);

function playFlowers() {
  var sound = document.getElementById("soundBack");
  sound.play();
}
