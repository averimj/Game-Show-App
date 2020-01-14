
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
    overlay.style.visibility = 'hidden';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  // checks to see if letter picked by user matches any letter in the phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }



}
