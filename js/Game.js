 class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Be courageous'),
      new Phrase('No rain no flowers'),
      new Phrase('What we think we become'),
      new Phrase('Conquer from within'),
      new Phrase('Im possible')
   ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }

  startGame() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }


}
