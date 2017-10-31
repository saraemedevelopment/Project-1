var player = new Player(580,580);
var trump = new Evil(10);

$( document ).ready(function() {
  setInterval(function()  {
  player.updatePlayer(), trump.updateEvil();
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
      player.shoot();
        break;
  };
};
