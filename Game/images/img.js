export function getImges() {
    const body = new Image();
    body.src = "./images/Body.png";

    const deadBody = new Image();
    deadBody.src = "./images/DeadBody.png";

    const deadHead = new Image();
    deadHead.src = "./images/DeadHead.png";

    const food = new Image();
    food.src = "./images/Food.png";

    const headUp = new Image();
    headUp.src = "./images/HeadUp.png";
    const headRight = new Image();
    headRight.src = "./images/HeadRight.png";
    const headDown = new Image();
    headDown.src = "./images/HeadDown.png";
    const headLeft = new Image();
    headLeft.src = "./images/HeadLeft.png";

    return {
        body,
        deadBody,
        deadHead,
        food,
        headUp,
        headRight,
        headDown,
        headLeft
    }
}
