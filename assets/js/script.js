let score = 0;
let timer = 10;
let intervalId;


const clickBtn = document.getElementById('clickBtn');
const startBtn = document.querySelector('#startBtn');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');


function startGame() {
    score = 0;
    timer = 10;
    scoreDisplay.textContent = score;
    clickBtn.disabled = false;
    startBtn.disabled = true;

    clickBtn.addEventListener('click', handleClick);

    intervalId = setInterval(() => {
        startBtn.textContent = timer;
        timer--;

        if (timer < 0) {
            clearInterval(intervalId);
            endGame();
        }
    }, 1000);
}

function handleClick() {
    score++;
    scoreDisplay.textContent = score;
}

function endGame() {
    clickBtn.disabled = true;
    startBtn.disabled = false;
    startBtn.textContent = "Restart";
    clickBtn.removeEventListener('click', handleClick);

    const playerName = prompt("Enter your name to save your score:");
    if (playerName) {
        let scores = JSON.parse(localStorage.getItem('scores')) || [];
        scores.push({ name: playerName, score: score });
        localStorage.setItem('scores', JSON.stringify(scores));
        alert(`Thank you ${playerName}, your score of ${score} has been saved!`);
    }

    displayScore();
}

function displayScore() {
    let scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = '';

    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < scores.length && i < 5; i++) {
        const li = document.createElement('li');
        li.textContent = `${scores[i].score} : ${scores[i].name}`;
        scoreList.appendChild(li);
    }
}

resetBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset the ranking?")) {
        localStorage.removeItem('scores');
        displayScore();
        alert("Ranking has been reset.");
    }
});

startBtn.addEventListener('click', startGame);
displayScore();
