// Pendulum Experiment
let canvas = document.getElementById('pendulumCanvas');
let ctx = canvas.getContext('2d');
canvas.width = 200;
canvas.height = 200;
let angle = Math.PI / 4;
let length = 100;
let gravity = 0.05;
let angleVelocity = 0;
let angleAcceleration = 0;

function startPendulum() {
    setInterval(updatePendulum, 1000 / 60);
}

function updatePendulum() {
    angleAcceleration = (-1 * gravity / length) * Math.sin(angle);
    angleVelocity += angleAcceleration;
    angle += angleVelocity;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2 + length * Math.sin(angle), length * Math.cos(angle));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + length * Math.sin(angle), length * Math.cos(angle), 10, 0, 2 * Math.PI);
    ctx.fill();
}

// Ohm's Law Simulation
function calculateCurrent() {
    let voltage = document.getElementById('voltage').value;
    let resistance = document.getElementById('resistance').value;
    let current = voltage / resistance;
    document.getElementById('currentDisplay').innerText = `Current (I): ${current.toFixed(2)} A`;
}
