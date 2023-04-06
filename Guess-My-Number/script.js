'use strict';
/*

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct guess';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const high = (highscore) => {};
document.querySelector('.check').addEventListener('click', () => {
  const guessed = Number(document.querySelector('.guess').value);

  //Player Wins
  if (!guessed) {
    return (document.querySelector('.message').textContent = 'No Number');
  } else if (guessed === secretNumber) {
    displayMessage('Correct Guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    score--;
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guessed !== secretNumber) {
    //
    if (score > 1) {
      displayMessage(guessed > secretNumber ? 'Guess Lower!' : 'Guess Higher!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Playing again
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
