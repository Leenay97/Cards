let kanji = document.querySelector('.kanji');
let reading = document.querySelector('.reading');
let translation = document.querySelector('.translation');
let words = [];
let pack1;
pack1 = "取り繕う toritsukurou :    smooth over, temporise, temporize, bushel, doctor, fix, furbish up, mend, repair, restore, to smooth over, to temporise, to temporize, touch on///転校 tenkou :    Transfer///脂肪 shibou :    fat, grease, blubber, adipose, oil, fats, fatty, slush, speck, adipose tissue, adiposeness, adiposity, fat products, fattiness, fatty tissue///黙って damatte :    Shut up///高級 koukyuu :    high-class, superiority, high class, high grade, eminent, high, high quality, high-altitude, high-grade, high-level, high-ranking, senior, superior, top-flight, top-grade, top-hole, top-quality, topping, upper-level///何やら naniyara :    Looks like he's///お仕置き oshioki :    punishment, scolding, penalisation, penalization, penalty///納得 nattoku :    Pleasant///心得 kokoroe :    The DOS and Don'ts///掌握 shouaku :    grasping, holding, seizing///一部始終 ichibushijyuu :    from beginning to end, full particulars, whole story, the whole story///典型的 tenkeiteki :    representative, typical, ideal, model, prototypical, stereotypical, distinctive, emblematic, exemplary, typic///天然 tennen :    Natural///純粋 jyunsui :    Pure///いわゆる iwayuru :    So-called///幼なじみ osananajimi :    My girlfriend///絡まってる karamatteru :    I'm entangled.///腰 koshi :    Waist///陣痛 jintsuu :    contraction, labor pains, labour pains, birth pangs, labor, labor pain, labour///腰痛 youtsuu :    lumbago, backache, back pain, low back pain, lower back pain, lumbar pain, musculoskeletal diseases///誇り hokori :    Pride///委員 iin :    Members///風紀 fuuki :    public morals///証拠 shouko :    evidence, proof, vindication, attestation, cogent evidence, grounds, test copy, testimonial, testimony, trial impression///近頃 chikagoro :    These days///朝礼 chourei :    pep talk, morning assembly, reveille///盛る moru :    flourish, prosper, copulate, serve, fill up, prescribe, dish out, boom, expand, fly high, heap up, pile up, stack up, thrive, to copulate, to fill up, to flourish, to prescribe, to prosper, to serve///殺風景 sappuukei :    dreary, tasteless, tastelessness, drab, unimaginative///補充 hojyuu :    Replacement///焼酎 shouchuu :    shochu, liquor, John Barleycorn, booze, hard drink, hard liquor, spirits, strong drink///近寄る chikayoru :    approach, draw near, close up, come near, come near to, come on, come up, draw close, go up, near, to draw near";
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