// let kanji = document.querySelector('.kanji');
// let reading = document.querySelector('.reading');
// let translation = document.querySelector('.translation');
// let words = [];
// let randomWord;
// let packs = [,]
// let initPack;

// let pack1;
// let pack2;
// pack1 = "company - компания..nephew - племянник..cousin - двоюродный брат/сестра..mother (mom) - мать..father (dad) - отец..parents - родители..wife - жена..husband - муж..couple - пара..ex-wife - бывшая жена..ex-husband - бывший муж..sister - сестра..brother - брат..daughter - дочь..son - сын..uncle - дядя..aunt - тетя..niece - племянница..grandmother (grandma, granny) - бабушка..grandfather (grandpa, grandad) - дедушка..grandparents - бабушка и дедушка..(mother)-in-law - теща, свекровь..I'm single. - Я не замужем / не женат...She's married. - Она замужем...He's divorced. - Он разведен...fall in love (WITH smb) - влюбиться (в кого-то)..date smb - встречаться, ходить на свидания..give birth (to a baby) - родить (ребенка)..argue - ссориться..break up (WITH smb) - разрывать отношения (с кем-то)..get divorced - разводиться..unfortunately - к сожалению..the best - самый лучший..the worst - самый плохой..alone - один, в одиночестве..school reunion - встреча выпускников..native speaker - носитель языка..What about you? How about you? And you? - А ты?..January - январь..February - февраль..March - март..April - апрель..May - май..June - июнь..July - июль..August - август..September - сентябрь..October - октябрь..November - ноябрь..December - декабрь..math(s) - математика..biology - биология..physics - физика..chemistry - химия..geography - география..history - история..computer studies - информатика..literature - литература..physical education (PE) - физкультура..languages - языки..expensive - дорогой..decide - решить..education - образование..the thing is... - дело в том, что.....strict teacher - строгий учитель..career - карьера..winter - зима..spring - весна..summer - лето..autumn (Br), fall (Am) - осень..celebrate - праздновать..wonderful - замечательный, прекрасный..cake - торт..(not) at all - совсем не..a little bit - немного..rich - богатый..abroad - за границей..museum - музей..flight - рейс..get ready (for an exam) - готовиться к экзамену..noise - шум..download - скачать..miss smb/smth - 1) пропустить что-то; 2) скучать по кому-то, чему-то..cute - симпатичный, хорошенький..grow up - вырасти..start school - пойти в школу..hometown - родной город; город, где ты родился или провел детство..move - переехать..get into university - поступить в университет..graduate from university - закончить университет..make (a lot of) money - заработать (много) денег..just - просто, только..have children - завести детей..take/do a course (in English) - пройти курс (английского)..take/have/do an exam, a test - сдавать экзамен, тест..pass an exam - успешно сдать экзамен..fail an exam - провалить экзамен..still - всё ещё..he's exactly the same - он в точности такой же..have a job interview - проходить собеседование на работу..get a degree (IN) - получить диплом по чему-то..get a diploma (IN) - получить диплом по чему-то..apply FOR a job/a course - устраиваться на работу, подать заявку на обучение..unemployed - безработный..be successful - быть успешным..get a certificate - получить сертификат..advice - совет..look up - искать информацию о чем-то (в словаре, интернете)..go online - зайти в интернет..chat - болтать..memorise - запоминать..record - записывать на аудио, видео..even - даже..way (to learn) - способ (выучить)..at first - сначала..reason - причина..revise (Br), review (Am) - повторять (к экзамену)..look FOR (a job) - искать (работу)..salary - зарплата..be/get promoted - получить повышение..be/get fired - быть уволенным..good experience - хороший опыт..be retired - быть на пенсии..quit my job - уйти с работы..";
// packs.push(pack1);
// pack2 = "быть - be, was/were, been||||идти/ехать - go, went, gone||||петь - sing, sang, sung||||иметь - have, had, had||||сидеть - sit, sat, sat||||плавать - swim, swam, swum||||получать - get, got, got/gotten||||делать - do, did, done||||приходить - come, came, come||||становиться - become, became, become||||кусать - bite, bit, bitten||||начинать - begin, began, begun||||находить - find, found, found||||забывать - forget, forgot, forgotten||||покупать - buy, bought, bought||||расти - grow, grew, grown||||сказать - say, said, said||||писать - write, wrote, written||||уезжать/покидать - leave, left, left||||делать (изготавливать) - make, made, made||||встречать - meet, met, met||||читать - read, read, read||||говорить - speak, spoke, spoken||||брать - take, took, taken||||учить (кого-то) - teach, taught, taught||||понимать - understand, understood, understood||||мочь/уметь - can, could||||выбирать - choose, chose, chosen||||стоить - cost, cost, cost||||водить машину - drive, drove, driven||||чувствовать - feel, felt, felt||||продавать - sell, sold, sold||||есть - eat, ate, eaten||||тратить - spend, spent, spent||||рассказывать - tell, told, told||||спать - sleep, slept, slept||||пить - drink, drank, drunk||||падать - fall, fell, fallen||||летать - fly, flew, flown||||лежать - lie, lay, lain||||ездить (верхом) - ride, rode, ridden||||бежать - run, ran, run||||думать - think, thought, thought||||строить - build, built, built||||ломать - break, broke, broken||||ловить - catch, caught, caught||||драться/бороться - fight, fought, fought||||прятать(ся) - hide, hid, hidden||||ударять - hit, hit, hit||||знать - know, knew, known||||стрелять - shoot, shot, shot||||выигрывать - win, won, won||||приносить - bring, brought, brought||||кормить - feed, fed, fed||||быть впору - fit, fit, fit||||слышать - hear, heard, heard||||давать взаймы - lend, lent, lent||||позволять - let, let, let||||посылать - send, sent, sent||||показывать - show, showed, shown||||просыпаться - wake, woke, woken||||носить (одежду) - wear, wore, worn||||бить - beat, beat, beaten||||резать - cut, cut, cut||||держать - hold, held, held||||болеть/причинять боль - hurt, hurt, hurt||||терять - lose, lost, lost||||класть - put, put, put||||закрывать - shut, shut, shut||||стоять - stand, stood, stood||||воровать - steal, stole, stolen||||бросать - throw, threw, thrown||||рисовать - draw, drew, drawn||||прощать - forgive, forgave, forgiven||||давать - give, gave, given||||платить - pay, paid, paid||||видеть - see, saw, seen||||||||замерзать - freeze, froze, frozen||||хранить/продолжать - keep, kept, kept||||иметь в виду - mean, meant, meant"
// packs.push(pack2);

// let textS;

// let chooser = document.querySelector('select');

// initPack = packs[chooser.value];
// textS = initPack.split('..');
// formCards();

// chooser.addEventListener('change', () => {
//     words = [];
//     initPack = [];
//     initPack = packs[chooser.value];
//     textS = [];
//     textS = initPack.split('||');
//     formCards();
//     console.log(textS);
// })

// function formCards() {
//     textS.forEach((item) => {
//         let itemS = item.split(' - ');
//         let newWord = [];
//         newWord.push(itemS[0]);
//         newWord.push(itemS[1]);
//         words.push(newWord);
//     })
//     showWord();
// }


// function showWord() {
//     randomWord = Math.floor(Math.random() * (words.length - 1));
//     let newWord = [];
//     newWord = words[randomWord][0].split(' ');
//     console.log(newWord[1]);
//     console.log(newWord.length);
//     kanji.innerHTML = newWord[0];
//     if (newWord.length == 2) {
//         reading.innerHTML = newWord[1];
//     } else {
//         reading.innerHTML = '-';
//     }
//     translation.innerHTML = words[randomWord][1];
// }
// console.log(words);

let kanji = document.querySelector('.kanji');
let reading = document.querySelector('.reading');
let translation = document.querySelector('.translation');
let words = [];
let randomWord;
let packs = [,]
let initPack;

let pack1;
let pack2;
pack1 = "company - компания||||nephew - племянник||||cousin - двоюродный брат/сестра||||mother (mom) - мать||||father (dad) - отец||||parents - родители||||wife - жена||||husband - муж||||couple - пара||||ex-wife - бывшая жена||||ex-husband - бывший муж||||sister - сестра||||brother - брат||||daughter - дочь||||son - сын||||uncle - дядя||||aunt - тетя||||niece - племянница||||grandmother (grandma, granny) - бабушка||||grandfather (grandpa, grandad) - дедушка||||grandparents - бабушка и дедушка||||(mother)-in-law - теща, свекровь||||I'm single. - Я не замужем / не женат.||||She's married. - Она замужем.||||He's divorced. - Он разведен.||||fall in love (WITH smb) - влюбиться (в кого-то)||||date smb - встречаться, ходить на свидания||||give birth (to a baby) - родить (ребенка)||||argue - ссориться||||break up (WITH smb) - разрывать отношения (с кем-то)||||get divorced - разводиться||||unfortunately - к сожалению||||the best - самый лучший||||the worst - самый плохой||||alone - один, в одиночестве||||school reunion - встреча выпускников||||native speaker - носитель языка||||What about you? How about you? And you? - А ты?||||January - январь||||February - февраль||||March - март||||April - апрель||||May - май||||June - июнь||||July - июль||||August - август||||September - сентябрь||||October - октябрь||||November - ноябрь||||December - декабрь||||math(s) - математика||||biology - биология||||physics - физика||||chemistry - химия||||geography - география||||history - история||||computer studies - информатика||||literature - литература||||physical education (PE) - физкультура||||languages - языки||||expensive - дорогой||||decide - решить||||education - образование||||the thing is... - дело в том, что...||||strict teacher - строгий учитель||||career - карьера||||winter - зима||||spring - весна||||summer - лето||||autumn (Br), fall (Am) - осень||||celebrate - праздновать||||wonderful - замечательный, прекрасный||||cake - торт||||(not) at all - совсем не||||a little bit - немного||||rich - богатый||||abroad - за границей||||museum - музей||||flight - рейс||||get ready (for an exam) - готовиться к экзамену||||noise - шум||||download - скачать||||miss smb/smth - 1) пропустить что-то; 2) скучать по кому-то, чему-то||||cute - симпатичный, хорошенький||||grow up - вырасти||||start school - пойти в школу||||hometown - родной город; город, где ты родился или провел детство||||move - переехать||||get into university - поступить в университет||||graduate from university - закончить университет||||make (a lot of) money - заработать (много) денег||||just - просто, только||||have children - завести детей||||take/do a course (in English) - пройти курс (английского)||||take/have/do an exam, a test - сдавать экзамен, тест||||pass an exam - успешно сдать экзамен||||fail an exam - провалить экзамен||||still - всё ещё||||he's exactly the same - он в точности такой же||||have a job interview - проходить собеседование на работу||||get a degree (IN) - получить диплом по чему-то||||get a diploma (IN) - получить диплом по чему-то||||apply FOR a job/a course - устраиваться на работу, подать заявку на обучение||||unemployed - безработный||||be successful - быть успешным||||get a certificate - получить сертификат||||advice - совет||||look up - искать информацию о чем-то (в словаре, интернете)||||go online - зайти в интернет||||chat - болтать||||memorise - запоминать||||record - записывать на аудио, видео||||even - даже||||way (to learn) - способ (выучить)||||at first - сначала||||reason - причина||||revise (Br), review (Am) - повторять (к экзамену)||||look FOR (a job) - искать (работу)||||salary - зарплата||||be/get promoted - получить повышение||||be/get fired - быть уволенным||||good experience - хороший опыт||||be retired - быть на пенсии||||quit my job - уйти с работы";
packs.push(pack1);
// pack2 = "インキ//ink ||インタビュー//interview ||引力 いんりょく//gravity ||ウーマン//woman ||ウール//wool ||ウエートレス//waitress ||植木 うえき//garden shrubs,  trees,  potted plant ||飢える うえる//to starve ||浮ぶ うかぶ//to float,  to rise to surface,  to come to mind ||浮かべる うかべる//to float,  to express,  to look (sad,   glad) ||浮く うく//to float,  to become merry,  to become loose ||承る うけたまわる//(hum) to hear,  to be told,  to know ||受取 うけとり//receipt ||受け持つ うけもつ//to take (be in) charge of ||薄暗い うすぐらい//dim,  gloomy ||薄める うすめる//to dilute,  to water down ||打合せ うちあわせ//business meeting,  previous arrangement,  appointment ||打ち消す うちけす//to deny,  to negate,  to contradict ||討つ うつ//to attack,  to avenge ||うっかり//carelessly,  thoughtlessly,  inadvertently ||映す うつす//to project,  to reflect,  to cast (shadow) ||写る うつる//to be photographed,  to be projected ||映る うつる//to be reflected,  to harmonize with,  to come out (photo) ||うどん//noodles (Japanese) ||有無 うむ//yes or no,  existence,  flag indicator (comp),  presence or absence marker ||埋める うめる//to bury,  to fill up,  to fill (a seat,   a vacant position) ||敬う うやまう//to show respect,  to honour ||裏返す うらがえす//to turn inside out,  to turn (something) over ||裏口 うらぐち//backdoor,  rear entrance ||占う うらなう//to forecast,  to predict ||恨み うらみ//resentment ||恨む うらむ//to curse,  to feel bitter ||羨ましい うらやましい//envious,  enviable ||羨む うらやむ//to envy ||売上 うりあげ//amount sold,  proceeds ||売り切れ うりきれ//sold-out ||売り切れる うりきれる//to be sold out ||売行き うれゆき//sales ||うろうろ//loiteringly,  aimless wandering ||運河 うんが//canal,  waterway ||うんと//a great deal,  very much ||英文 えいぶん//sentence in English ||英和 えいわ//English-Japanese (e.g. dictionary) ||ええと//let me see,  well,  er.... ||液体 えきたい//liquid,  fluid ||エチケット//etiquette ||絵の具 えのぐ//colors,  paints ||エプロン//apron ||偉い えらい//great,  celebrated,  eminent,  terrible,  awful,  famous,  remark able,  excellent ||宴会 えんかい//party,  banquet ||園芸 えんげい//horticulture,  gardening ||演劇 えんげき//play (theatrical) ||円周 えんしゅう//circumference ||遠足 えんそく//trip,  hike,  picnic ||延長 えんちょう//extension,  elongation,  prolongation,  lengthening ||煙突 えんとつ//chimney ||追い掛ける おいかける//to chase or run after someone,  to run down,  to pursue ||追い越す おいこす//to pass (e.g. car),  to outdistance,  to outstrip ||オイル//oil,  engine oil,  kerosene ||応援 おうえん//aid,  assistance,  help,  reinforcement ||王女 おうじょ//princess ||応ずる おうずる//to answer,  to respond,  to meet,  to satisfy,  to accept ||応接 おうせつ//reception ||応対 おうたい//receiving,  dealing with ||往復 おうふく//(col) round trip,  coming and going,  return ticket ||欧米 おうべい//Europe and America,  the West ||応用 おうよう//application,  put to practical use ||オーケストラ//orchestra ||おおざっぱ//rough (not precise),  broad,  sketchy ||大通り おおどおり//main street ||オートメーショ ン//automation ||大凡 おおよそ//about,  roughly,  as a rule,  approximately ||お帰り おかえり//return,  welcome ||おかげさまで//Thanks to god,  thanks to you ||おかず//side dish,  accompaniment for rice dishes ||拝む おがむ//to worship,  to beg,  to make a supplication ||お代わり おかわり//second helping,  another cup ||補う おぎなう//to compensate for ||おきのどくに//my condolences||屋外 おくがい//outdoors ||おくさん//(hon) wife,  your wife,  madam ||送り仮名 おくりがな//part of word written in kana ||怠る おこたる//to neglect,  to be off guard,  to be feeling better ||押える おさえる//to stop,  to restrain,  to seize,  to repress,  to suppress,  to press down ||おさきに//before,  ahead,  previously ||納める おさめる//to obtain,  to reap,  to pay,  to supply,  to accept ||治める おさめる//(1) to govern,  to manage,  (2) to subdue ||惜しい おしい//regrettable,  disappointing,  precious ||御辞儀 おじぎ//bow ||伯父さん おじさん//middle-aged gentleman,  uncle ||小父さん おじさん//middle-aged gentleman,  uncle ||叔父さん おじさん//middle-aged gentleman,  uncle ||おしゃれ//smartly dressed,  someone smartly dressed,  fashionconscious ||おじゃまします//Excuse me for disturbing you ||教わる おそわる//to be taught ||おだいじに//Take care of yourself"
// packs.push(pack2);

let textS;

let chooser = document.querySelector('select');

initPack = packs[chooser.value];
textS = initPack.split('||||');
formCards();

chooser.addEventListener('change', () => {
    words = [];
    initPack = [];
    initPack = packs[chooser.value];
    textS = [];
    textS = initPack.split('||||');
    formCards();
    console.log(textS);
})

function formCards() {
    textS.forEach((item) => {
        let itemS = item.split(' - ');
        let newWord = [];
        newWord.push(itemS[0]);
        newWord.push(itemS[1]);
        words.push(newWord);
    })
    showWord();
}


function showWord() {
    randomWord = Math.floor(Math.random() * (words.length - 1));
    let newWord = [];
    newWord = words[randomWord][0];
    console.log(newWord[1]);
    console.log(newWord.length);
    kanji.innerHTML = newWord;
    if (newWord.length == 2) {
        reading.innerHTML = '';
    } else {
        reading.innerHTML = '';
    }
    translation.innerHTML = words[randomWord][1];
}
console.log(words);
