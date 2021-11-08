/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const btnReset = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');
const keys = keyboard.querySelectorAll('.key');

btnReset.addEventListener('click', () => {
  game = new Game();
  game.startGame();

})

keyboard.addEventListener('click', (e) => {
  if(e.target.className === 'key'){
    game.handleInteraction(e.target.innerHTML);
  }
})

document.addEventListener('keydown',(e) => {
  if (document.getElementById('overlay').style.display === '') {
      e.preventDefault();
  } else {
      const regEx = /^[a-z]$/i;
      if (regEx.test(e.key) && e.target.className !== 'chosen') {
          game.handleInteraction(e.key.toLowerCase())
      }
  }
});


