import { getImages } from "../images/img.js";

const images = getImages();

class Snake {
    constructor(head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = length;
        this.headImg = images.headRight;
        this.bodyImg = images.body;
    }
}
export function createSnake() {
    const head = {
        x: 4,
        y: 9,
    };

    const tail = [];

    const defaultSnakeLength = 4;

    return new Snake(head, tail, defaultSnakeLength);
}

