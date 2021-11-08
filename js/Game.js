/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
  constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = this.getRandomPhrase();
  }

  // resets the game state and starts the game by randomly picking a new phrase
  startGame(){
    const overlay = document.querySelector('#overlay');
    const phrase = document.querySelector('#phrase').querySelector('ul')
    const keys = document.querySelectorAll('.key');
    const images = document.querySelector('#scoreboard').getElementsByTagName('img');
    for (let i = 0; i < keys.length; i++){
      keys[i].classList.remove('chosen');
      keys[i].classList.remove('wrong');
    }
    for (let i = 0; i < images.length; i++){
      images[i].src = 'images/liveHeart.png';
    }
    phrase.innerHTML = '';    
    overlay.style.display = 'none';
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // Array of nerd phrases
  createPhrases(){
    return ['Work work', 'Hello there', 'General Kenobi', 'You shall not pass', 'There is no spoon'];
  }

  // returns a random phrase 
  getRandomPhrase(){
    const phrases = this.phrases;
    const randomPhrases = Math.floor(Math.random() * phrases.length);
    return new Phrase(phrases[randomPhrases]);
  }

  // modifies classes of keyboard keys to show if they are correct or incorrect
  handleInteraction(button){
    const keyboard = document.querySelector('#qwerty');
    const keys = keyboard.querySelectorAll('.key');

    if(this.activePhrase.checkLetter(button)){
      
      for (let i = 0; i < keys.length; i++){
        if (keys[i].innerHTML === button){
          keys[i].classList.add('chosen');
        }
      }

      this.activePhrase.showMatchedLetter(button);
      // this.checkForWin();
      if (this.checkForWin()){
        this.gameOver(true)
      }

    } else {
      for (let i = 0; i< keys.length; i++){
        if (keys[i].innerHTML === button){
          keys[i].classList.add('wrong');
        }
      }
      this.removeLife();
    }
  }

  // changes heart image on incorrect guess
  removeLife(){
    const images = document.querySelector('#scoreboard').getElementsByTagName('img');
    for(let i = 0; i < images.length; i++){
      if(images[i].src === images[images.length - 1].src){
        this.missed++;
        images[i].src = 'images/lostHeart.png'
        if(this.missed === images.length){
          this.gameOver(false);
        }
        break;
      }
    }
  } 

  // helper function to check for win.  the check will take place after every guess in handleInteraction()
  checkForWin(){
    const shownLetters = document.querySelector('#phrase').getElementsByTagName('li');
    let counter = 0;
    for(let i = 0; i < shownLetters.length; i++){
      if (shownLetters[i].classList.contains('show') || shownLetters[i].classList.contains('space')){
        counter++;
      } 
    }
    if(counter === shownLetters.length){
      return true
    }
  }

  // if game is completed, changes classes to show either win or lose screen
  gameOver(gameVictory){
    const overlay = document.querySelector('#overlay');
    overlay.style.display = '';

    if(!gameVictory){
      overlay.querySelector('h1').innerHTML = 'You Lose!'
      overlay.classList = 'lose';
    } else if (gameVictory){
      overlay.querySelector('h1').innerHTML = 'You Win!'
      overlay.classList = 'win';
    }
  }
}