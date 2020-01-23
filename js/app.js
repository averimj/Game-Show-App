let game;

const button = document.getElementById('btn__reset');
const keyboard = document.getElementById('qwerty');

// listens for click on start button
button.addEventListener( 'click', () => {
  game = new Game();
  game.startGame();
})

// listens for onscreen keyboard clicks
keyboard.addEventListener( 'click', (e) => {
  game.handleInteraction(e.target);
})
