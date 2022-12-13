export function getImages() {
    const body = new Image();
    body.src = "./images/Body.png";

    const deadBody = new Image();
    deadBody.src = "./images/DeadBody.png";

    const food = new Image();
    food.src = "./images/Food.png";

    const deadHeadUp = new Image();
    deadHeadUp.src = "./images/deadHeadUp.png";
    const deadHeadLeft = new Image();
    deadHeadLeft.src = "./images/deadHeadLeft.png";
    const deadHeadDown = new Image();
    deadHeadDown.src = "./images/deadHeadDown.png";
    const deadHeadRight = new Image();
    deadHeadRight.src = "./images/deadHeadRight.png";

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
        deadHeadUp,
        deadHeadDown,
        deadHeadLeft,
        deadHeadRight,
        food,
        headUp,
        headRight,
        headDown,
        headLeft
    }
}
