var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

});

app.get('/pages', function (req, res) {
  res.json([
    {
      id: 1,
      image: 'https://source.unsplash.com/random',
      title: 'main title',
      content: 'Lorem Ipsum – tas ir teksta salikums, kuru izmanto poligrāfijā un maketēšanas darbos. Lorem Ipsum ir kļuvis par vispārpieņemtu teksta aizvietotāju kopš 16. gadsimta sākuma. Tajā laikā kāds nezināms iespiedējs izveidoja teksta fragmentu, lai nodrukātu grāmatu ar burtu paraugiem. Tas ir ne tikai pārdzīvojis piecus gadsimtus, bet bez ievērojamām izmaiņām saglabājies arī mūsdienās, pārejot uz datorizētu teksta apstrādi. Tā popularizēšanai 60-tajos gados kalpoja Letraset burtu paraugu publicēšana ar Lorem Ipsum teksta fragmentiem un, nesenā pagātnē, tādas maketēšanas programmas kā Aldus PageMaker, kuras šablonu paraugos ir izmantots Lorem Ipsum teksts.'
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random',
      title: 'about title',
      content: "Jau sen ir noskaidrots fakts, ka aplūkojot maketa dizainu un kompozīciju teksta saturs novērš uzmanību. Lorem Ipsum izmanto tāpēc, kas tas nodrošina vairāk vai mazāk vienmērīgu burtu izvietojumu un padara to līdzīgu lasāmam tekstam angļu valodā, kas neizdodas, ja vienu un to pašu tekstu 'Šeit ir teksts, šeit ir teksts' atkārto. Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta meklēšanas programmās atslēgas vārdus 'lorem ipsum', var redzēt cik daudz web lapu aizvien vēl gaida savu piedzimšanu. Pēdējo gadu laikā teksts Lorem Ipsum ieguvis dažādas versijas. Dažreiz tās radušās kļūdu dēļ, dažreiz – apzināti (piemēram, humoristiski un tiem līdzīgi varianti)."
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random',
      title: 'contact title',
      content: 'Pretēji vispārpieņemtai pārliecībai, Lorem Ipsum nav teksts bez satura. Tā pirmsākums meklējams 45.gadā p.m.ē., vienā no klasiskās latīņu literatūras teksta fragmentiem, apstiprinot tā vairāk kā divus tūkstošus gadu seno pagātni. Richard McClintock, latīņu valodas profesors no Hampden-Sydney koledžas, Virdžīnijā, izvēlējās vienu no Lorem Ipsum visneparastākajiem vārdiem un sāka nodarboties ar tā meklēšanu klasiskajā latīņu valodas literatūrā un atrada neapšaubāmu pirmavotu. Lorem Ipsum aizgūts no grāmatas "de Finibus Bonorum et Malorum" ("Par labā un ļaunā robežām") 1.10.32 un 1.10.33. nodaļām, kuru 45.gadā p.m.ē. sarakstījis Cicerons. Šis traktāts par ētikas teoriju bija ļoti populārs Renesanses periodā. Pirmā Lorem Ipsum rinda "Lorem ipsum dolor sit amet..", ir viena no 1.10.32 nodaļas rindām.'
    }
  ]);
});

app.listen(3000, function () {
  console.log('working');
});
