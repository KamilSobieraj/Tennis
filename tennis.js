let canvas = document.getElementById("gameCanvas");
let canvasContext = canvas.getContext("2d");
let ballSize = 10;
let ballX = 50;
let ballXSpeed = 4;
let ballY = 50;
let ballYSpeed = 5;
let ballColor = "white";
let paddleWidth = 10;
let paddleHeight = 100;

function drawEverything() {
  //court
  drawRectangle(0, 0, canvas.width, canvas.height, "black");
  //left paddel
  drawRectangle(0, 210, paddleWidth, paddleHeight, "white");
  //ball
  drawBall();
}

function drawRectangle(posX, posY, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(posX, posY, width, height);
}
function drawBall() {
  canvasContext.fillStyle = ballColor;
  canvasContext.beginPath();
  canvasContext.arc(ballX, ballY, ballSize, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function moveEveryting() {
  ballX = ballX + ballXSpeed;
  if (ballX > canvas.width - ballSize) {
    ballXSpeed = -ballXSpeed;
  }
  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
}

function callBoth() {
  drawEverything();
  moveEveryting();
}

let framesPerSecond = 50;
setInterval(callBoth, 1000 / framesPerSecond);
