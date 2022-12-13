import { getImages } from "../images/img.js";

const images = getImages();

class Snake {
    constructor(head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = length;
    }
}
export function createSnake() {
    const head = {
        x: 4,
        y: 9,
        img: images.headRight
    };
    const tail = [];
    const defaultSnakeLength = 4;

    return new Snake(head, tail, defaultSnakeLength);
}

