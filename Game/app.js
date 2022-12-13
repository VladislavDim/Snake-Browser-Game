import { getImages } from "./images/img.js";
import { createFood } from "./models/food.js";
import { drawScene } from "./models/render.js";
import { createSnake } from "./models/snake.js";

const snake = createSnake();
const food = createFood(20);
const images = getImages();

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
                snake.head.img = images.headUp;
            }
            break;
        case "ArrowDown":
            if (defaultDirection != directions.Up) {
                inputDirection = directions.Down;
                snake.head.img = images.headDown;
            }
            break;
        case "ArrowRight":
            if (defaultDirection != directions.Left) {
                inputDirection = directions.Right;
                snake.head.img = images.headRight;
            }
            break;
        case "ArrowLeft":
            if (defaultDirection != directions.Right) {
                inputDirection = directions.Left;
                snake.head.img = images.headLeft;
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
    eat();
}

function eat() {
    if (snake.head.x == food.x && snake.head.y == food.y) {
        snake.length++;
        spawnFood();
    }
}

function spawnFood() {
    food.x = Math.floor(Math.random() * 20);
    food.y = Math.floor(Math.random() * 20);

    if (snake.head.x == food.x && snake.head.y == food.y) {
        spawnFood();
    }
    snake.tail.forEach(el => {
        if (el.x == food.x && el.y == food.y) {
            spawnFood();
        }
    });
}

function main() {
    tick();
    drawScene(snake, food);
}

function start() {
    setInterval(main, 100)
}

start();
