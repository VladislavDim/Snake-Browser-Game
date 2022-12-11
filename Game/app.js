const canvas = document.getElementById('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

const width = canvas.width;
const gridSize = width / 20;
const matrix = Array(gridSize).fill().map(() => Array(gridSize).fill())
console.log(gridSize);
const heat = {
    x: 0,
    y: 0
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowUp":
            heat.y--;
            heat.y = checkPosition(heat.y);
            break;
        case "ArrowDown":
            heat.y++;
            break;
        case "ArrowRight":
            heat.x++;
            heat.x = checkPosition(heat.x);
            break;
        case "ArrowLeft":
            heat.x--;
            break;
    }
});

function checkPosition(a) {
    if (a > 19) {
        a = 0;
    }
    if (a < 0) {
        a = 19;
    }
    return a;
}
function drawGrid() {
    ctx.beginPath();
    ctx.strokeStyle = '#483d8b';
    for (let i = gridSize; i < width; i += gridSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, width);
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }
    ctx.closePath();
    ctx.stroke();
}
function clearGrid() {
    ctx.clearRect(0, 0, width, width);
}
function drawScene() {
    clearGrid();
    drawGrid();

    rect(heat.x, heat.y, 'green');
}
function rect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}
function start() {
    setInterval(drawScene, 100)
}

start();