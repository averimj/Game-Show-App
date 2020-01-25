let game;

const button = document.getElementById('btn__reset');
const keyboard = document.getElementsByClassName('key');

// listens for click on start button
button.addEventListener( 'click', () => {
  game = new Game();
  game.startGame();
})

// listens for onscreen keyboard clicks
for (let i = 0; i < keyboard.length; i++){
  let oneKey = keyboard[i];
  oneKey.addEventListener( 'click', (e) => {
    game.handleInteraction(e.target);
  })
}
