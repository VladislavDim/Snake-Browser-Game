import { getImages } from "../images/img.js";
const images = getImages();
class Food {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
    }
}
export function createFood(columnsCount) {

    let x = Math.floor(Math.random() * columnsCount);
    let y = Math.floor(Math.random() * columnsCount);
    let img = images.food;

    return new Food(x, y, img);
};
