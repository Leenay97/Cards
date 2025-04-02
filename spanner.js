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
pack2 = "быть - be, was/were, been||||идти/ехать - go, went, gone||||петь - sing, sang, sung||||иметь - have, had, had||||сидеть - sit, sat, sat||||плавать - swim, swam, swum||||получать - get, got, got/gotten||||делать - do, did, done||||приходить - come, came, come||||становиться - become, became, become||||кусать - bite, bit, bitten||||начинать - begin, began, begun||||находить - find, found, found||||забывать - forget, forgot, forgotten||||покупать - buy, bought, bought||||расти - grow, grew, grown||||сказать - say, said, said||||писать - write, wrote, written||||уезжать/покидать - leave, left, left||||делать (изготавливать) - make, made, made||||встречать - meet, met, met||||читать - read, read, read||||говорить - speak, spoke, spoken||||брать - take, took, taken||||учить (кого-то) - teach, taught, taught||||понимать - understand, understood, understood||||мочь/уметь - can, could||||выбирать - choose, chose, chosen||||стоить - cost, cost, cost||||водить машину - drive, drove, driven||||чувствовать - feel, felt, felt||||продавать - sell, sold, sold||||есть - eat, ate, eaten||||тратить - spend, spent, spent||||рассказывать - tell, told, told||||спать - sleep, slept, slept||||пить - drink, drank, drunk||||падать - fall, fell, fallen||||летать - fly, flew, flown||||лежать - lie, lay, lain||||ездить (верхом) - ride, rode, ridden||||бежать - run, ran, run||||думать - think, thought, thought||||строить - build, built, built||||ломать - break, broke, broken||||ловить - catch, caught, caught||||драться/бороться - fight, fought, fought||||прятать(ся) - hide, hid, hidden||||ударять - hit, hit, hit||||знать - know, knew, known||||стрелять - shoot, shot, shot||||выигрывать - win, won, won||||приносить - bring, brought, brought||||кормить - feed, fed, fed||||быть впору - fit, fit, fit||||слышать - hear, heard, heard||||давать взаймы - lend, lent, lent||||позволять - let, let, let||||посылать - send, sent, sent||||показывать - show, showed, shown||||просыпаться - wake, woke, woken||||носить (одежду) - wear, wore, worn||||бить - beat, beat, beaten||||резать - cut, cut, cut||||держать - hold, held, held||||болеть/причинять боль - hurt, hurt, hurt||||терять - lose, lost, lost||||класть - put, put, put||||закрывать - shut, shut, shut||||стоять - stand, stood, stood||||воровать - steal, stole, stolen||||бросать - throw, threw, thrown||||рисовать - draw, drew, drawn||||прощать - forgive, forgave, forgiven||||давать - give, gave, given||||платить - pay, paid, paid||||видеть - see, saw, seen||||||||замерзать - freeze, froze, frozen||||хранить/продолжать - keep, kept, kept||||иметь в виду - mean, meant, meant"
packs.push(pack2);

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
