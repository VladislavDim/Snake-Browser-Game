const canvas = document.getElementById('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

const width = canvas.width;
const gridSize = width / 20;

function drawGrid() {
    ctx.beginPath();
    for (let i = gridSize; i < width; i += gridSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, width);
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }
    ctx.closePath();
    ctx.stroke();
}
drawGrid();