
 class Game {
  constructor() {
    // set the # of misses to zero when the game starts
    this.missed = 0;

    // creates 5 quotes
     this.phrases = [
        new Phrase('Looking backwards fucks up your neck'),
        new Phrase('Life is simple get out your head and get into the moment'),
        new Phrase('If you avoid conflict to keep the peace you start a conflict within yourself'),
        new Phrase('Demand more from yourself'),
        new Phrase('What are you willing to give up in order to be the person you are meant to be')
     ];
     // this.phrases = [
     //    new Phrase('Be courageous'),
     //    new Phrase('No rain no flowers'),
     //    new Phrase('What we think we become'),
     //    new Phrase('Conquer from within'),
     //    new Phrase('Im possible')
     // ];
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


}
