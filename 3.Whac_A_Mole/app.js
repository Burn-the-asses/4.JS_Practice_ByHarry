//Get all the Elements/tags on our DOM to work on it in our code

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');


//ALL Global Variables

let result = 0;
let hitPostition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    // console.log(randomPosition);
    // console.log(Math.floor(Math.random() * 9));

    hitPostition = randomSquare.id;
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPostition) {
            result++;
            console.log(result);
            score.innerHTML = result;
            hitPostition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if (currentTime == 0 ) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your Final Score Is '+ result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);