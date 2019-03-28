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
let paddle1Y = 250;

function drawEverything() {
  //court
  drawRectangle(0, 0, canvas.width, canvas.height, "black");
  //left paddel
  drawRectangle(0, paddle1Y, paddleWidth, paddleHeight, "white");
  //rightpaddel
  drawRectangle(
    canvas.width - paddleWidth,
    paddle1Y,
    paddleWidth,
    paddleHeight,
    "white"
  );
  //ball
  drawBall();
}

function calculateMousePosition(e) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseXPos = e.clientX - rect.left - root.scrollLeft;
  let mouseYPos = e.clientY - rect.top - root.scrollTop;
  return {
    x: mouseXPos,
    y: mouseYPos
  };
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
  ballY = ballY + ballYSpeed;
  if (ballX > canvas.width - ballSize) {
    ballXSpeed = -ballXSpeed;
  }
  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
  if (ballY > canvas.height - ballSize) {
    ballYSpeed = -ballYSpeed;
  }
  if (ballY < 0) {
    ballYSpeed = -ballYSpeed;
  }
}

function callBoth() {
  drawEverything();
  moveEveryting();
}

let framesPerSecond = 50;
setInterval(callBoth, 1000 / framesPerSecond);

canvas.addEventListener("mousemove", function(e) {
  let mousePos = calculateMousePosition(e);
  paddle1Y = mousePos.y - (paddleHeight/2);
});
