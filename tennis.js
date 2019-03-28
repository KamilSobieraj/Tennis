let canvas = document.getElementById("gameCanvas");
let canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballXSpeed = 4;
let ballY = 50;
let ballYSpeed = 5;

function drawEverything() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 210, 10, 100);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(ballX, ballY, 10, 10);
}

drawEverything();
