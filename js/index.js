let game = new Game();
let road = new Road();
let car= new Car();
let obstacleArr = [];
let obstacleGenerator;
let canvasUpdate;
let pointCounter;
let descriptionText = document.getElementsByClassName("description")[0];
let button = document.getElementById("start-button");

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startObstacles();
    game.updateCanvas();
  };
}

document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      if(car.x > 0) {
        car.x -= 20;
      }
      break;
    case 39:
      if(car.x < game.canvas.width - car.width) {
        car.x += 20;
      }
      break;
  }
});




