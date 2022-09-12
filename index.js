const generateRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

const allHoles = document.querySelectorAll('.hole');

const getRandomHole = () => {
    return allHoles[Math.round(generateRandom(0, allHoles.length - 1))];
};

const holeContainerDOM = document.querySelector('.hole-container');
const scoreDOM = document.querySelector('.score');
const missedDOM = document.querySelector('.missed');
const screenContentDOM = document.querySelector('.screen-content');

const gameStats = {
    score: 0,
    missed: 0
};

const renderScores = () => {
    scoreDOM.textContent = gameStats.score;
    missedDOM.textContent = gameStats.missed;
}

const handleHoleClick = (event) => {
    if (!event.target.classList.contains('hole')) {
        return;
    }
    if (event.target.classList.contains('mole')) {
        event.target.classList.remove('mole');
        gameStats.score++;
    } else {
        gameStats.missed++;
        gameStats.missed === 3 && gameOver();
    }
    renderScores();
};

let gameLoopId = null;

const gameOver = () => {
    clearTimeout(gameLoopId);
    holeContainerDOM.removeEventListener('click', handleHoleClick);
    allHoles.forEach(hole => hole.classList.remove('mole'));
    screenContentDOM.innerHTML = `
        <div>
            <p>Game over</p>
            <button onclick="start()">Play again</button>
        </div>
    `;
};

const gameLoop = () => {
    const randomHole = getRandomHole();
    const randomTime = generateRandom(200, 1000);
    randomHole.classList.add('mole');
    gameLoopId = setTimeout(() => {
        randomHole.classList.remove('mole');
        gameLoop();
    }, randomTime);
};

const start = () => {
    holeContainerDOM.addEventListener('click', handleHoleClick);
    screenContentDOM.innerHTML = '';
    gameStats.score = 0;
    gameStats.missed = 0;
    renderScores();
    gameLoop();
};

/* 
A function that generates a random length of time for the mole to peep.
A function that selects a random hole for the mole to peep from.
Using the two functions above, create a function to make the mole emerge out of the random hole.
A start-up function for the game.
*/