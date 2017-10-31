var player = new Player(100, 100, 'player');

document.onkeydown = function(e) {
  console.log(e.keyCode);
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

setInterval(update(),100)
// var trump = new Evil("pink", ctx);
//
// trump.drawEvil();
// setInterval(trump.move, 1000);
