let kanji = document.querySelector('.kanji');
let reading = document.querySelector('.reading');
let translation = document.querySelector('.translation');
let words = [];
let text;
text = 'あいかわらず*as ever,as usual,the same]アイデア/アイディア*idea]あいまい*vague,ambiguous]遭う あう*to meet,to encounter (undesirable nuance)]扇ぐ あおぐ*to fan,to flap]青白い あおじろい*pale,pallid]あかんぼう*baby]明き あき*room,time to spare,emptiness]あきれる*to be amazed,to be shocked]アクセント*accent]あくび*yawn]飽くまで あくまで*to the end,to the last,stubbornly]明け方 あけがた*dawn]揚げる あげる*to lift,to fry]挙げる あげる*to raise,to fly]あげる (=やる)*to do for';
let textS = text.split(']');
let randomWord;

textS.forEach((item) => {
    let itemS = item.split('*');
    let newWord = [];
    newWord.push(itemS[0].split(' '));
    newWord.push(item.split('*')[1]);
    words.push(newWord);
})


function showWord() {
    randomWord = Math.floor(Math.random() * (words.length - 1));
    console.log(randomWord);
    kanji.innerHTML = words[randomWord][0][0];
    if (words[randomWord][0].length == 2) {
        reading.innerHTML = words[randomWord][0][1];
    } else {
        reading.innerHTML = '-';
    }
    translation.innerHTML = words[randomWord][1];
}
showWord();
console.log(words);