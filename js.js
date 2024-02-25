let card = document.querySelector('.card');
let showButton = document.querySelector('.showkanji');
let deleteButton = document.querySelector('.deleteword');
let arrow = document.querySelector('.arrow');

card.addEventListener('click', (e) => {
    card.classList.toggle('reversed');
    if (card.classList.contains('reversed')) {
        setTimeout(() => {
            kanji.classList.add('hidden');
            reading.classList.add('hidden');
            translation.classList.remove('hidden');
        }, 200)
    } else {
        setTimeout(() => {
        kanji.classList.remove('hidden');
        translation.classList.add('hidden');
        if (!showButton.classList.contains('hidekanji')){
            reading.classList.remove('hidden');
        }
    }, 200)
    }

});

showButton.addEventListener('click', () => {
    if (showButton.classList.contains('hidekanji')){
        showButton.classList.remove('hidekanji');
        reading.classList.remove('hidden');
    } else {
        showButton.classList.add('hidekanji');
        reading.classList.add('hidden');
    }
})

deleteButton.addEventListener('click', ()=>{
    words.splice(randomWord, 1);
    console.log(words[randomWord]);
    if (randomWord == -1) {
        kanji.innerHTML = 'No more words';
        translation.innerHTML = 'No more words';
        reading.innerHTML = '';
        return false;
    }
    showWord();
});

arrow.addEventListener('click', ()=>{
    if (randomWord > -1) showWord();
    
})

showWord();