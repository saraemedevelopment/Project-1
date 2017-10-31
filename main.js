var player = new Player(580, 580);
// var trump = new Evil(100, 100, 10);

$( document ).ready(function() {
  setInterval(function()  {
  player.updatePlayer();
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
