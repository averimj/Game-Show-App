class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('ul');
    const div = document.getElementById('banner');


    const phraseStrings = this.phrase.toString();
    const phraseLowers = phraseStrings.toLowerCase();
    const phraseSplits = phraseLowers.split('');

    console.log(phraseSplits);

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
    console.log(div);
  }
  
}
