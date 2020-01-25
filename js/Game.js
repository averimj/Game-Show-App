
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
      new Phrase('Be kind to yourself'),
      new Phrase('Tough times dont last'),
      new Phrase('Worry less smile more'),
      new Phrase('I am worthy'),
      new Phrase('Choose to shine'),
      new Phrase('Rise and grind')
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
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // if any of the li's contains the word 'hide', returns false
  checkForWin() {
    const allLIs = document.querySelectorAll('ul li');

    for (let i = 0; i < allLIs.length; i++){
      let oneLI = allLIs[i];
      if(oneLI.classList.value.includes('hide') ) {
        return false;
      }
    }
    return true
  }


  // removes a heart each time user guesses the wrong letter
  removeLife() {
    this.missed += 1
    const images = document.querySelectorAll('li img');

    for (let i = 0; i < this.missed; i++) {
      let lostHeart = images[i].src = 'images/lostHeart.png';
    }
    if(this.missed === 5) {
      this.gameOver();
    }
  }

  // displays a screen letting the user know if they've won or lost the game
  gameOver(gameWon) {
    let overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');
      if ( this.checkForWin() ) {
        setTimeout( () => {
          overlay.classList.remove('start');
          overlay.classList.add('win');

          overlay.style.display = 'block';
          gameOverMessage.textContent = 'Great Job...You Win!';
        }, 2000)
      } else {
        overlay.classList.remove('start');
        overlay.classList.add('lose');

        overlay.style.display = 'block';
        gameOverMessage.textContent = 'You Lose...Try Again';
      }
  }


  // WIP -- keep getting error message
  handleInteraction(keyPressed) {
    let letter = keyPressed.textContent;

    if (this.activePhrase.checkLetter(letter) ) {

      this.activePhrase.showMatchedLetter(letter);
      keyPressed.classList.add('chosen');
      keyPressed.disabled = 'true';
      if (this.checkForWin() ) {
        this.gameOver();
      }
    } else {
      keyPressed.classList.add('wrong');
      keyPressed.disabled = 'true';
      this.removeLife();
    }
  }

  reset() {


  }



}
