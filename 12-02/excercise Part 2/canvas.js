var canvas = document.getElementById("myCanvas");

function drawCircle() {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawLine() {
    var ctx = canvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawSquare() {
    var ctx = canvas.getContext("2d");
    ctx.moveTo(55, 10);
    ctx.lineTo(135, 10);
    ctx.lineTo(135, 90);
    ctx.lineTo(55, 90);
    ctx.lineTo(55, 10);
    ctx.stroke();
}

function drawName() {
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Luciano Donato", 10, 50);
}