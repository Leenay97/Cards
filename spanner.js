let kanji = document.querySelector('.kanji');
let reading = document.querySelector('.reading');
let translation = document.querySelector('.translation');
let words = [];
let pack1;
pack1 = "取り繕う toritsukurou :    1) чинить, исправлять, приводить в порядок, 2) перен. сглаживать, смягчать, прикрывать///転校 tenkou :    переход в другую школу ///脂肪 shibou :    [животный] жир ///黙って damatte :    Shut up///高級 koukyuu :    высокое качество ///何やら naniyara :    なにか///お仕置きき oshioki:    наказание для ребёнка///納得 nattoku :    согласие, понимание ///心得 kokoroe :    • знание, понимание, опыт, правила, указания, памятка, рекомендации, [временно] исполняющий обязанности ///掌握 shouaku :    овладевать чем-л., держать в своих руках что-л ///一部始終 ichibushijyuu :    все подробности, все детали, всё от начала до конца ///典型的 tenkeiteki :    классическая форма, [классический] образец,///天然 tennen :    природа ///純粋 jyunsui :    чистый, без примеси ///いわゆる iwayuru :    как говорится///幼なじみ osananajimi :    друг (подруга) детства///絡まってる karamatteru :    запутываться, перепутываться, спутываться///腰 koshi :    Waist///誇り hokori :    гордость///風紀 fuuki :    дисциплина ///証拠 shouko :    доказательство, свидетельство, ///近頃 chikagoro :    недавно, в последнее время, на днях, ///盛る moru :    накладывать (напр. еду на тарелку), сервировать///殺風景 sappuukei :    сухой, прозаичный, серый, безвкусный ///補充 hojyuu :    пополнение, дополнение, комплектование, снабжение, ///近寄る chikayoru :    приближаться, подходить";
let textS = pack1.split('///');
let randomWord;

textS.forEach((item) => {
    let itemS = item.split(':');
    let newWord = [];
    newWord.push(itemS[0]);
    newWord.push(itemS[1]);
    words.push(newWord);
})


function showWord() {
    randomWord = Math.floor(Math.random() * (words.length - 1));
    let newWord = [];
    newWord = words[randomWord][0].split(' ');
    console.log(newWord[1]);
    console.log(newWord.length);
    kanji.innerHTML = newWord[0];
    if (newWord.length == 3) {
        reading.innerHTML = newWord[1];
    } else {
        reading.innerHTML = '-';
    }
    translation.innerHTML = words[randomWord][1];
}
showWord();
console.log(words);