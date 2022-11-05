//Array of card that containing objects
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

// console.log(cardArray);
// Shuffle randomoly array elements
cardArray.sort( () => 0.5 - Math.random());
// console.log(cardArray);

//Get Display Element Grid
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
// console.log(gridDisplay)

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        // console.log(card, i);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    console.log('check for match');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('You clicked the same card');
    }
    if(cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
     }
     else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('sorry try again');
     }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;

    if(cardsWon.length == (cardArray.length)/2) {
        resultDisplay.innerHTML = 'Congratulation you found them all';
    }
}

function flipCard() {
    // console.log(cardArray);
    const cardId = this.getAttribute('data-id');
    // console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    // console.log('clicked', cardId);
    // console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}