// Get Element By Id to didplay choices
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

//button that is clicked to make the choices
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;
//iterate over choices to make decision
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    //get computer choice to display on secreen
    generateComputerChoice();
    getResult();
}));

//computer choice function
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1   //we can use possibleChoices.length
    // console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 1) {
        computerChoice = 'paper';
    }

    //Display computer choice on the  secreen
    computerChoiceDisplay.innerHTML = computerChoice;
}

//Result generate based on the user and computer choices
function getResult() {
    if (computerChoice === userChoice) {
        result = 'it\'s draw';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost!';
    }

    resultDisplay.innerHTML = result;
}