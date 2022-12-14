import { getImages } from "./images/img.js";
import { createFood } from "./models/food.js";
import { gameOver } from "./models/gameOver.js";
import { drawScene, spawnFood } from "./models/render.js";
import { createSnake } from "./models/snake.js";

const snake = createSnake();
const food = createFood(20);
const images = getImages();

let timer = null;

const directions = {
    Up: { x: 0, y: - 1 },
    Left: { x: -1, y: 0 },
    Down: { x: 0, y: 1 },
    Right: { x: 1, y: 0 }
}

let defaultDirection = directions.Right;
let inputDirection = directions.Right;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (defaultDirection != directions.Down) {
                inputDirection = directions.Up;
                snake.headImg = images.headUp;
            }
            break;
        case "ArrowDown":
            if (defaultDirection != directions.Up) {
                inputDirection = directions.Down;
                snake.headImg = images.headDown;
            }
            break;
        case "ArrowRight":
            if (defaultDirection != directions.Left) {
                inputDirection = directions.Right;
                snake.headImg = images.headRight;
            }
            break;
        case "ArrowLeft":
            if (defaultDirection != directions.Right) {
                inputDirection = directions.Left;
                snake.headImg = images.headLeft;
            }
            break;
    }
});

function checkCoordinates(a) {
    if (a > 20 - 1) {
        a = 0;
    }
    if (a < 0) {
        a = 20 - 1;
    }
    return a;
}

function tick() {
    snake.tail.push({
        x: snake.head.x,
        y: snake.head.y,
        img: images.body
    });
    while (snake.tail.length > snake.length) {
        snake.tail.shift();
    }

    defaultDirection = inputDirection;
    snake.head.x += defaultDirection.x;
    snake.head.y += defaultDirection.y;
    snake.head.x = checkCoordinates(snake.head.x);
    snake.head.y = checkCoordinates(snake.head.y);
    gameOver(snake, start, timer);
    eat();
}

function eat() {
    if (snake.head.x == food.x && snake.head.y == food.y) {
        snake.length++;
        spawnFood(food, snake);
    }
}

function main() {
    tick();
    drawScene(snake, food);
}

function start() {

    if (timer != null) {
        clearInterval(timer);
    }

    snake.head.x = 4;
    snake.head.y = 9;
    snake.headImg = images.headRight;
    snake.length = 4;
    inputDirection = directions.Right;
    spawnFood(food, snake);

    timer = setInterval(main, 100)
}

start();
