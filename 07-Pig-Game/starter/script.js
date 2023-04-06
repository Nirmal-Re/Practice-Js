'use strict';

//Setting up variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceImgEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Setting initail condition

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  for (let i = 0; i < scores.length; i++) {
    document.getElementById(`current--${i}`).textContent = 0;
    document.getElementById(`score--${i}`).textContent = scores[i];
  }

  diceImgEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

//Changing active player
const changePlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Event Listner for clicking on roll
btnRoll.addEventListener('click', () => {
  if (playing) {
    const rolledNumber = Math.trunc(Math.random() * 6) + 1;
    diceImgEl.classList.remove('hidden');
    diceImgEl.src = `dice-${rolledNumber}.png`;
    if (rolledNumber !== 1) {
      currentScore += rolledNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

//Event Listener for clicking on hold
btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Finishing Game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      diceImgEl.classList.add('hidden');
    } else {
      changePlayer();
    }
  }
});

//Starting a new game
btnNew.addEventListener(`click`, init);
