// List of all cards of the deck 
const cardDesigns = ['dove', 'dove', 'heart', 'heart', 'gamepad', 'gamepad', 'drum', 'drum', 'headphones', 'headphones', 'bicycle', 'bicycle', 'cut', 'cut', 'grin-tears', 'grin-tears', ];
const deckOfCards = document.querySelector('.deck');
const restart = document.querySelector('.restart');

// Modal Congratulations Message
const modal = document.querySelector('.modal');

const stars = document.querySelector('.stars');
const moves = document.querySelector('.moves');
const moveCounter = document.querySelector('.move-count');
let card = document.getElementsByClassName('card');
const time = document.querySelector('.time');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let timer;
let resetTimer = 0;

// Store card pairs matched correctly
let matchCards = [];
let finishGame = 0;

// Set up the event listener for a card. If a card is clicked:
// - display the card's symbol
restart.addEventListener("click", addBoard);
deckOfCards.addEventListener("click", openCard);
shuffle(cardDesigns);
newBoard();

// Begin the game
function addBoard() {
    deckOfCards.innerHTML = "";
    shuffle(cardDesigns);
    newBoard();
    matchTwoCards = [];
    finishGame = 0;
    moves.innerText = 0;
    resetTimer = 0;
    seconds.innerText = 0;
    minutes.innerText = 0;
    stopTime();
    newRating();
    resetModal();
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// New board created with all cards, loop through each card and create its HTML
function newBoard() {
    cards = shuffle(cards);
    let length = cards.length;

    for (let i = 0; i < length; i++) {
        deck.innerHTML = "";
		[].forEach.call(cards,
            function (tile) {
                deck.appendChild(tile);
            }
        );
        cards[i].setAttribute('id', `card${i}`);
        cards[i].classList.remove('open', 'show', 'match', 'freeze');
    }

    // Reset the time
    clicks = 0;
    seconds = 0;
    minutes = 0;
    clearInterval(time);
    document.getElementById('timer').innerHTML = `minutes 0 seconds 0`;

}

// Flip card to see the card design
function openCard(event) {
    if (resetTimer === 0) {
        setTime();
        resetTimer = 1;
    }
    if (matchCards.length > 1) {
        return;
    }

    if (event.target.tagName === 'LI') {
        turnCard(event);
        matchCards.push(event.target);
        if (matchCards.length === 2) {
            checkMatched();
            countMoves();
        }
    }
}

function newBoard() {
    for (let i = 0; i < cardDesigns.length; i++) {
        const newList = document.createElement('li');
        newList.setAttribute('class', 'card fa fa-' + cardDesigns[i]);
        deckOfCards.appendChild(newList);
    }
}

function turnCard(event) {
    event.target.classList.add('open');
    event.target.classList.add('show');
}

// Verify if the cards match
function checkMatched() {

    if (matchCards[0].classList.value === matchCards[1].classList.value) {
        setTimeout(function () {
            matched();
            matchCards = [];
        }, (500));

    } else {
        notMatched();
    }
}

// Award player 3 stars if they win in less than 16 tries
function countMoves() {
    moves.innerText++;

    if (moves.innerText > 16) {
        document.querySelector('.stars li:nth-child(1)').classList.add('star-empty');

    }
    if (moves.innerText > 24) {
        document.querySelector('.stars li:nth-child(2)').classList.add('star-empty');
    }
}

// If cards match
function matched() {
    matchCards[0].classList.add('match');
    matchCards[1].classList.add('match');
    finishGame++;

    if (finishGame === 8) {
        clearInterval(timer);
        modalMessage();
    }
}

// If cards do not match
function notMatched() {
    matchCards[0].classList.add('no-match');
    matchCards[1].classList.add('no-match');
    setTimeout(function () {
        matchCards[0].classList.remove('open', 'show', 'no-match');
        matchCards[1].classList.remove('open', 'show', 'no-match');
        matchCards = [];
    }, (1000));
}

// Reset Star Rating
function newRating() {
    document.querySelector(".stars li:nth-child(1)").classList.remove("star-empty");
    document.querySelector(".stars li:nth-child(2)").classList.remove("star-empty");
}

// Timer to clock gametime from start to finish
function setTime() {
    timer = setInterval(function () {
        seconds.innerText++;
        if (seconds.innerText == 60) {
            minutes.innerText++;
            seconds.innerText = 0;

        }
    }, (1000));
    return timer;
}

function stopTime() {
    clearInterval(timer);
}

// Modal Congratulations Message

function modalMessage() {
    const winMessage = document.querySelector(".modal-message");
    modal.style.display = "block";
    winMessage.appendChild(restart);
    winMessage.appendChild(stars);
    winMessage.appendChild(time);
    winMessage.appendChild(moveCounter);
}

function resetModal() {
    const panel = document.querySelector(".score-panel");
    modal.style.display = "none";
    restart.appendChild(time);
    panel.prepend(stars);
    panel.appendChild(time);
    panel.appendChild(moveCounter);
    panel.appendChild(restart);
}
