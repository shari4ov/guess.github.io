'use strict';

/* document.querySelector('.message').textContent = '🏆Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 22;
document.querySelector('.score').textContent = 22;
document.querySelector('.guess').value = 33; */
/*
let myGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

 
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }

  // When user wins
  else if (guess === myGuess) {
    document.querySelector('.message').textContent = '🏆Correct Guess!';
    document.querySelector('.number').textContent = myGuess;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When user inputs wrong number
  else if (guess > myGuess) {
    document.querySelector('.message').textContent = 'Value is high...';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess < myGuess) {
    document.querySelector('.message').textContent = 'Value is Low...';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  myGuess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🏆You Won!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } 
  else if(guess!==secretNumber){
    if(score>1){
      displayMessage(guess > secretNumber ? "📈Too high" : "📉Too Low" );
      score --;
      document.querySelector('.score').textContent = score;
    }
    else{
     displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    
  }
});

document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent= score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
});
