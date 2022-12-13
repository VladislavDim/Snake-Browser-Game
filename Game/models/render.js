const canvas = document.getElementById('canvas');
/**@type {CanvasRenderingContext2D} */

const ctx = canvas.getContext('2d');
const width = canvas.width;
const columnsCount = 20;
const gridSize = width / columnsCount;

export function drawScene(snake, food) {

    ctx.clearRect(0, 0, width, width);

    drawGrid(ctx, width, gridSize);

    rect(food.x, food.y, food.img);

    rect(snake.head.x, snake.head.y, snake.head.img);

    for (let element of snake.tail) {
        rect(element.x, element.y, element.img);
    }
}

function rect(x, y, img) {
    ctx.drawImage(img, x * gridSize + 2, y * gridSize + 2, gridSize - 4, gridSize - 4);
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