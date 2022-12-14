const gameOverView = document.querySelector('#gameover');
let restart;

gameOverView.addEventListener('click', (e) => {

    if (e.target.textContent == 'YES') {
        gameOverView.style.display = 'none';
        restart();
    }
    else {
        console.log('game over');
    }
});

export function gameOver(snake, start, timer) {
    snake.tail.forEach(el => {
        if (el.x == snake.head.x && el.y == snake.head.y) {
            restart = start;
            clearInterval(timer);
            gameOverView.style.display = 'block';
            gameOverView.style.float = 'right';
        }
    })
}