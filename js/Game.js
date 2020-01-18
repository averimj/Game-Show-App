
 class Game {
  constructor() {
    // set the # of misses to zero when the game starts
    this.missed = 0;

    // creates 5 quotes
     this.phrases = [
        new Phrase('Be courageous'),
        new Phrase('No rain no flowers'),
        new Phrase('What we think we become'),
        new Phrase('Conquer from within'),
        new Phrase('Im possible')
     ];
    this.activePhrase = null;
  }


  // generates a random quote from my 5 quotes
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }


  // removes the cover so player can see the letter board after they click the 'start game' button
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // if any of the li's contains the word 'hide', returns false
  checkForWin() {
    const allLIs = document.querySelectorAll('ul li');

    for (let i = 0; i < allLIs.length; i++){
      const oneLI = allLIs[i];
      if(oneLI.classList.contains('hide')){
        return false;
      } else {
        return true;
      }
    }
  }

  // removes a heart each time user guesses the wrong letter
  removeLife() {
    this.missed += 1
    const images = document.querySelectorAll('li img');

    for (let i = 0; i < this.missed; i++) {
      let lostHeart = images[i].src = 'images/lostHeart.png';
    }
    if(this.missed === 5) {
      this.gameOver(false);
    }
  }


}
