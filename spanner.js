let kanji = document.querySelector('.kanji');
let reading = document.querySelector('.reading');
let translation = document.querySelector('.translation');
let words = [];
let randomWord;
let packs = [,]
let initPack;

let pack1;
let pack2;
let pack3;
pack1 = "company - компания||||nephew - племянник||||cousin - двоюродный брат/сестра||||mother (mom) - мать||||father (dad) - отец||||parents - родители||||wife - жена||||husband - муж||||couple - пара||||ex-wife - бывшая жена||||ex-husband - бывший муж||||sister - сестра||||brother - брат||||daughter - дочь||||son - сын||||uncle - дядя||||aunt - тетя||||niece - племянница||||grandmother (grandma, granny) - бабушка||||grandfather (grandpa, grandad) - дедушка||||grandparents - бабушка и дедушка||||(mother)-in-law - теща, свекровь||||I'm single. - Я не замужем / не женат.||||She's married. - Она замужем.||||He's divorced. - Он разведен.||||fall in love (WITH smb) - влюбиться (в кого-то)||||date smb - встречаться, ходить на свидания||||give birth (to a baby) - родить (ребенка)||||argue - ссориться||||break up (WITH smb) - разрывать отношения (с кем-то)||||get divorced - разводиться||||unfortunately - к сожалению||||the best - самый лучший||||the worst - самый плохой||||alone - один, в одиночестве||||school reunion - встреча выпускников||||native speaker - носитель языка||||What about you? How about you? And you? - А ты?||||January - январь||||February - февраль||||March - март||||April - апрель||||May - май||||June - июнь||||July - июль||||August - август||||September - сентябрь||||October - октябрь||||November - ноябрь||||December - декабрь||||math(s) - математика||||biology - биология||||physics - физика||||chemistry - химия||||geography - география||||history - история||||computer studies - информатика||||literature - литература||||physical education (PE) - физкультура||||languages - языки||||expensive - дорогой||||decide - решить||||education - образование||||the thing is... - дело в том, что...||||strict teacher - строгий учитель||||career - карьера||||winter - зима||||spring - весна||||summer - лето||||autumn (Br), fall (Am) - осень||||celebrate - праздновать||||wonderful - замечательный, прекрасный||||cake - торт||||(not) at all - совсем не||||a little bit - немного||||rich - богатый||||abroad - за границей||||museum - музей||||flight - рейс||||get ready (for an exam) - готовиться к экзамену||||noise - шум||||download - скачать||||miss smb/smth - 1) пропустить что-то; 2) скучать по кому-то, чему-то||||cute - симпатичный, хорошенький||||grow up - вырасти||||start school - пойти в школу||||hometown - родной город; город, где ты родился или провел детство||||move - переехать||||get into university - поступить в университет||||graduate from university - закончить университет||||make (a lot of) money - заработать (много) денег||||just - просто, только||||have children - завести детей||||take/do a course (in English) - пройти курс (английского)||||take/have/do an exam, a test - сдавать экзамен, тест||||pass an exam - успешно сдать экзамен||||fail an exam - провалить экзамен||||still - всё ещё||||he's exactly the same - он в точности такой же||||have a job interview - проходить собеседование на работу||||get a degree (IN) - получить диплом по чему-то||||get a diploma (IN) - получить диплом по чему-то||||apply FOR a job/a course - устраиваться на работу, подать заявку на обучение||||unemployed - безработный||||be successful - быть успешным||||get a certificate - получить сертификат||||advice - совет||||look up - искать информацию о чем-то (в словаре, интернете)||||go online - зайти в интернет||||chat - болтать||||memorise - запоминать||||record - записывать на аудио, видео||||even - даже||||way (to learn) - способ (выучить)||||at first - сначала||||reason - причина||||revise (Br), review (Am) - повторять (к экзамену)||||look FOR (a job) - искать (работу)||||salary - зарплата||||be/get promoted - получить повышение||||be/get fired - быть уволенным||||good experience - хороший опыт||||be retired - быть на пенсии||||quit my job - уйти с работы";
packs.push(pack1);
pack2 = "быть - be, was/were, been||||идти/ехать - go, went, gone||||петь - sing, sang, sung||||иметь - have, had, had||||сидеть - sit, sat, sat||||плавать - swim, swam, swum||||получать - get, got, got/gotten||||делать - do, did, done||||приходить - come, came, come||||становиться - become, became, become||||кусать - bite, bit, bitten||||начинать - begin, began, begun||||находить - find, found, found||||забывать - forget, forgot, forgotten||||покупать - buy, bought, bought||||расти - grow, grew, grown||||сказать - say, said, said||||писать - write, wrote, written||||уезжать/покидать - leave, left, left||||делать (изготавливать) - make, made, made||||встречать - meet, met, met||||читать - read, read, read||||говорить - speak, spoke, spoken||||брать - take, took, taken||||учить (кого-то) - teach, taught, taught||||понимать - understand, understood, understood||||мочь/уметь - can, could||||выбирать - choose, chose, chosen||||стоить - cost, cost, cost||||водить машину - drive, drove, driven||||чувствовать - feel, felt, felt||||продавать - sell, sold, sold||||есть - eat, ate, eaten||||тратить - spend, spent, spent||||рассказывать - tell, told, told||||спать - sleep, slept, slept||||пить - drink, drank, drunk||||падать - fall, fell, fallen||||летать - fly, flew, flown||||лежать - lie, lay, lain||||ездить (верхом) - ride, rode, ridden||||бежать - run, ran, run||||думать - think, thought, thought||||строить - build, built, built||||ломать - break, broke, broken||||ловить - catch, caught, caught||||драться/бороться - fight, fought, fought||||прятать(ся) - hide, hid, hidden||||ударять - hit, hit, hit||||знать - know, knew, known||||стрелять - shoot, shot, shot||||выигрывать - win, won, won||||приносить - bring, brought, brought||||кормить - feed, fed, fed||||быть впору - fit, fit, fit||||слышать - hear, heard, heard||||давать взаймы - lend, lent, lent||||позволять - let, let, let||||посылать - send, sent, sent||||показывать - show, showed, shown||||просыпаться - wake, woke, woken||||носить (одежду) - wear, wore, worn||||бить - beat, beat, beaten||||резать - cut, cut, cut||||держать - hold, held, held||||болеть/причинять боль - hurt, hurt, hurt||||терять - lose, lost, lost||||класть - put, put, put||||закрывать - shut, shut, shut||||стоять - stand, stood, stood||||воровать - steal, stole, stolen||||бросать - throw, threw, thrown||||рисовать - draw, drew, drawn||||прощать - forgive, forgave, forgiven||||давать - give, gave, given||||платить - pay, paid, paid||||видеть - see, saw, seen||||||||замерзать - freeze, froze, frozen||||хранить/продолжать - keep, kept, kept||||иметь в виду - mean, meant, meant"
packs.push(pack2);
pack3 = "списывать на тесте - cheat on a test||||быть в тюрьме - be in prison||||заблудиться - get lost||||ломать кость - break a bone||||петь на людях, публично - sing in public||||ездить в Европу - travel to Europe||||плавать в океане - swim in the ocean||||танцевать на столе - dance on a table||||меню - menu||||закуски - starters / appetizers||||основное блюдо - main course||||гарнир - side||||счёт - bill / check||||салат Цезарь - Caesar salad||||креветки - shrimp||||сёмга, форель - salmon||||на гриле - grilled||||грудка - breast||||стейк (с кровью / средней / хорошей прожарки) - steak (rare / medium / well-done)||||тунец - tuna||||брокколи - broccoli||||печёный - baked||||свежий - fresh||||кофе со льдом - iced coffee||||лимонад - lemonade||||вода без газа / с газом - still / sparkling water||||хлеб - bread||||бутерброд - sandwich||||тост - (a piece of) toast||||блины - pancakes||||овсянка / каша - porridge||||хлопья - cereal||||яичница - fried eggs||||варёные яйца - boiled eggs||||яичница-болтунья - scrambled eggs||||омлет - omelet||||салат (блюдо) - salad||||сыр - cheese||||сливочное масло - butter||||бекон - bacon||||колбаса - sausage||||мёд - honey||||чай - tea||||кофе - coffee||||апельсиновый сок - orange juice||||сливки - cream||||молоко - milk||||йогурт - yogurt||||без сахара / без добавления сахара - sugar-free||||вегетарианский - vegetarian||||морепродукты - seafood||||говядина - beef||||курица - chicken||||свинина - pork||||паста, спагетти - pasta / spaghetti||||пюре - mashed potatoes||||гречка - buckwheat||||гамбургер - (a) hamburger||||чипсы - crisps / chips||||картофель фри - chips / fries||||фаст фуд - fast food||||майонез - mayonnaise / mayo||||кетчуп - ketchup||||(оливковое) масло - (olive) oil||||рецепт - recipe||||блюдо - dish||||соус - sauce||||соль - salt||||перец - pepper||||десерт - dessert||||джем, варенье - jam||||печенье - cookies / biscuits||||сметана - sour cream||||творог - cottage cheese||||шоколад - chocolate||||пирог - pie||||мороженое - ice cream||||конфеты - sweets / candies||||пиво - beer||||вино - wine||||шампанское - champagne||||яблоки - apples||||апельсины - oranges||||виноград - grapes||||персики - peaches||||арбузы - watermelons||||клубника - strawberries||||груши - pears||||лимоны - lemons||||ананасы - pineapples||||голубика / черника - blueberries||||помидоры - tomatoes||||огурцы - cucumbers||||капуста - cabbage||||салат (листья) - lettuce||||грибы - mushrooms||||чеснок - garlic||||морковь - carrots||||лук - onions||||картошка - potatoes||||горох - peas||||средний (размер) - medium||||встретить знаменитость - meet a celebrity||||разговаривать с носителем - talk to a native speaker||||страдать морской болезнью - be seasick||||спать в странном месте - sleep in a strange place||||печь торт - bake a cake||||подниматься на гору - climb a mountain||||украсть что-то из магазина - shoplift something||||застрять в лифте - be trapped in an elevator"
packs.push(pack3);

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
