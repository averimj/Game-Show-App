class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();;
  }


  addPhraseToDisplay() {
    const ul = document.querySelector('ul');
    const div = document.getElementById('banner');

    // takes 'this.phrase' and turns it into all lower case form
    const phraseLowers = this.phrase;

    // splits each word into a single letter
    const phraseSplits = phraseLowers.split('');


    /* iterates thru each letter and creates an <li> for that letter, then adds the appropiate className for that letter.
    Appends the <li> to the <ul> which is then appended to the <div> */
    for(let i = 0; i < phraseSplits.length; i++){
      if(phraseSplits[i] === ' '){
        const li = document.createElement('li');
        li.className = ('space');
        ul.appendChild(li);
        div.appendChild(ul);
      } else {
        const li = document.createElement('li');
        li.textContent = phraseSplits[i];
        li.className = ('hide letter ' + phraseSplits[i]);
        ul.appendChild(li);
        div.appendChild(ul);
      }
    }
  }


  // checks to see if letter picked by user matches any letter in the phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }


  // reveals the matched letter on the screen
  showMatchedLetter(letter) {
    const listOfLI = document.querySelectorAll('ul li');
    for(let i = 0; i < listOfLI.length; i++) {
      let singleLetterOfLI = listOfLI[i].textContent

      if (singleLetterOfLI === letter) {
        listOfLI[i].classList.remove('hide');
        listOfLI[i].classList.add('show');
      }
    }
  }


}
