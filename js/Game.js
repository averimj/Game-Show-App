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
}
