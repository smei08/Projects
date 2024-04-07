const clickArea = document.querySelector('.click-area');
const displayText = document.querySelector('.display-text');
const scoreElement = document.querySelectorAll('.scores');

/* holds the user's score history */
const scoreHistory = [];

/*  */
const MIN_TIME = 3000;
const MAX_TIME = 10000;

let msTimeOut =0;
let waitingForClick = false;

function play() {
    const msTillChange = Math.floor(Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME);

    clickArea.style.backgroundColor = null;
    displayText.textContent = "";

    setTimeout(() => {
        msTimeOut = Date.now();

        clickArea.style.backgroundColor = '#009578';
        waitingForClick = true;
    }, msTillChange);
}

function addScore(score) {
    scoreHistory.unshift(score);
    /* unshift adds score to the array, unshift adds to the beginning of the array */

    for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
        const score = scoreHistory[i];

        scoreElement[i].textContent = `${score} ms`; 
    }
}

clickArea.addEventListener('click', () => {
    if (waitingForClick) {
        const score = Date.now() - msTimeOut;
        waitingForClick = false;
        displayText.textContent = `Your time was ${score} milisec! Click to play again :)` 

        addScore(score);
    } else {
        play();
    }
});