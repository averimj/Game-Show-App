
 class Game {
  constructor() {
    // set the # of misses to zero when the game starts
    this.missed = 0;

    // creates 10 quotes
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


  // generates a random quote from my 10 quotes
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }


  // removes the cover so user can see the letter board once they've clicked the 'start game' button
  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }


  // if any <li> contains the word 'hide', returns false
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

      // if the user has won ... display the 'Great Job...You Win!' message after 2 seconds
      if ( this.checkForWin() ) {
        setTimeout( () => {
          overlay.classList.remove('start');
          overlay.classList.add('win');

          overlay.style.display = 'block';
          gameOverMessage.textContent = 'Great Job...You Win!';
        }, 2000)
      } else {

        // else the user has lost and display the 'You Lose...Try Again' message
        overlay.classList.remove('start');
        overlay.classList.add('lose');

        overlay.style.display = 'block';
        gameOverMessage.textContent = 'You Lose...Try Again';
      }
    // resets the game
    this.reset();
  }



  handleInteraction(keyPressed) {
    let letter = keyPressed.textContent;

    // if the letter guessed by user is in the phrase ...
    if (this.activePhrase.checkLetter(letter) ) {

      // show the letter on the screen, disable the letter and check to see if the user has won the game
      this.activePhrase.showMatchedLetter(letter);
      keyPressed.classList.add('chosen');
      keyPressed.disabled = 'true';
      if (this.checkForWin() ) {
        this.gameOver();
      }
    } else {

      // else the letter guessed by the user is NOT in the phrase and remove 1 life/heart
      keyPressed.classList.add('wrong');
      keyPressed.disabled = 'true';
      this.removeLife();
    }
  }

  // resets the game so the user can play again
  reset() {
    const allKeys = document.getElementsByClassName('key');
    const images = document.querySelectorAll('li img');
    const myLists = document.querySelectorAll('ul li')

    // removes the <li>'s from the previous game with a delay of 2 seconds
    setTimeout( () => {
      for(let m = 0; m < myLists.length; m++){
        let myLi = myLists[m];
        myLi.remove();
      }
    }, 2000)

    // returns the keys back to its default state
    for (let i = 0; i < allKeys.length; i++) {
    let oneKey = allKeys[i];
        oneKey.removeAttribute('disabled');
        oneKey.classList.remove('chosen');
        oneKey.classList.remove('wrong');
    }

    // sets the 'lost' hearts back to 'live' hearts with a delay of 2 seconds
    setTimeout( () => {
      for (let a = 0; a < images.length; a++) {
        images[a].src = 'images/liveHeart.png';
      }
    }, 2000)

  }


}
