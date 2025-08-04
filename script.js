let startTime;
let timeout;
const message = document.getElementById('message');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', startGame);

function startGame() {
    message.textContent = '等待绿色...';
    startBtn.style.display = 'none';

    let delay = Math.random() * 3000 + 1000; // 1~4秒随机延迟

    timeout = setTimeout(() => {
        document.body.style.backgroundColor = 'green';
        message.textContent = '点屏幕！';
        startTime = Date.now();

        document.body.addEventListener('click', stopGame, { once: true });
    }, delay);
}

function stopGame() {
    let reactionTime = Date.now() - startTime;
    message.textContent = `你的反应时间：${reactionTime} ms`;
    document.body.style.backgroundColor = 'black';
    startBtn.textContent = '再来一次';
    startBtn.style.display = 'inline-block';
}