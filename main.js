var soundID = "Thunder";

function loadSound () {
  createjs.Sound.registerSound("assets/thunder.mp3", soundID);
}

function playSound () {
  createjs.Sound.play(soundID);
}



var player = new Player();
var trump = new Evil(5);
var tomato = new Bullet(10);

$( document ).ready(function() {
  setInterval(function()  {
  player.updatePlayer(), trump.updateEvil(), tomato.updateShot;
},1000/60);
});



document.onkeydown = function(e) {
    switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
    case 32:
      tomato.shoot();
        break;
  };
};
