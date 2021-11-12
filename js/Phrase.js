/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  // Creates li nodes and assigns them letters and classes
  addPhraseToDisplay(){
    const phraseElement = document.querySelector('#phrase ul');
    const letterArray = this.phrase.split('');
    for(let i = 0; i < letterArray.length; i++){
      const li = document.createElement('li');
      li.innerHTML = letterArray[i];
      letterArray[i] !== ' ' ? li.classList.add('letter') : li.classList.add('space');
      letterArray[i] !== ' ' ? li.classList.add(li.innerHTML) : false;
      phraseElement.appendChild(li);
    }
  }

  // helper function to enable handleInteraction() to check if the letter has been chosen
  checkLetter(letter){
    for(let i =0; i < this.phrase.length; i++){
      if(letter === this.phrase[i]){
        return true;
      }
    }
  }

  // helper function to enable handleInteraction() to add show class to letter
  showMatchedLetter(letter){
    const letters = document.querySelector('#phrase').getElementsByTagName('li');
    for(let i = 0; i < letters.length; i++){
      if(letters[i].innerHTML === letter){
        letters[i].classList.add('show');
      }
    }
  }
}


