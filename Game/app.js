const canvas = document.getElementById('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const gridSize = width / 20;

function drawGrid() {
    ctx.beginPath();
    ctx.moveTo(gridSize, 0);
    ctx.lineTo(gridSize, height);
    ctx.closePath();
    ctx.stroke();
}
drawGrid();