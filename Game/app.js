import { getImges } from "./images/img.js";

const canvas = document.getElementById('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
const images = getImges();

const width = canvas.width;
const columnsCount = 20;
const gridSize = width / columnsCount;
let isEaten = false;

const food = {
    x: Math.floor(Math.random() * columnsCount),
    y: Math.floor(Math.random() * columnsCount),
    img: images.food
};
const head = {
    x: 4,
    y: 9,
    img: images.headRight
};
const tail = [];
const directions = {
    Up: { x: 0, y: - 1 },
    Left: { x: -1, y: 0 },
    Down: { x: 0, y: 1 },
    Right: { x: 1, y: 0 }
}
let defaultDirection = directions.Right;
let inputDirection = directions.Right;

let snakeLength = 10;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (defaultDirection != directions.Down) {
                inputDirection = directions.Up;
                head.img = images.headUp;
            }
            break;
        case "ArrowDown":
            if (defaultDirection != directions.Up) {
                inputDirection = directions.Down;
                head.img = images.headDown;
            }
            break;
        case "ArrowRight":
            if (defaultDirection != directions.Left) {
                inputDirection = directions.Right;
                head.img = images.headRight;
            }
            break;
        case "ArrowLeft":
            if (defaultDirection != directions.Right) {
                inputDirection = directions.Left;
                head.img = images.headLeft;
            }
            break;
    }
});

function checkCoordinates(a) {
    if (a > columnsCount - 1) {
        a = 0;
    }
    if (a < 0) {
        a = columnsCount - 1;
    }
    return a;
}

function tick() {
    tail.push({
        x: head.x,
        y: head.y
    });
    while (tail.length > snakeLength) {
        tail.shift();
    }

    defaultDirection = inputDirection;
    head.x += defaultDirection.x;
    head.y += defaultDirection.y;
    head.x = checkCoordinates(head.x);
    head.y = checkCoordinates(head.y);
    eat();
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
    rect(food.x, food.y, food.img);
    rect(head.x, head.y, head.img);
    for (let element of tail) {
        rect(element.x, element.y, images.body);
    }
}
function eat() {
    if (head.x == food.x && head.y == food.y) {
        isEaten = true;
        snakeLength++;
        spawnFood();
    }
}
function spawnFood() {
    food.x = Math.floor(Math.random() * columnsCount);
    food.y = Math.floor(Math.random() * columnsCount);

    if (head.x == food.x && head.y == food.y) {
        spawnFood();
    }
    tail.forEach(el => {
        if (el.x == food.x && el.y == food.y) {
            spawnFood();
        }
    });
}

function rect(x, y, img) {
    ctx.drawImage(img, x * gridSize + 2, y * gridSize + 2, gridSize - 4, gridSize - 4);
}

function main() {
    tick();
    drawScene();
}

function start() {
    setInterval(main, 100)
}

start();