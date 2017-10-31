var player = new Player(100, 100, 'player');

player.drawPlayer();

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

// var trump = new Evil("pink", ctx);
//
// trump.drawEvil();
// setInterval(trump.move, 1000);
