class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('ul');
    const div = document.getElementById('banner');

    // takes 'this.phrase' and turns it into all lower case form
    const phraseLowers = this.phrase.toLowerCase();

    // splits each word into a single letter
    const phraseSplits = phraseLowers.split('');

    console.log(phraseSplits);

    // iterates thru each letter and creates an <li> for that letter, then adds the appropiate className for that letter. Appends the <li> to the <ul> which is then appended to the <div>
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
