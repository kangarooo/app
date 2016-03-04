var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

});

app.get('/pages', function (req, res) {
  res.json([
    {
      id: 1,
      image: 'https://source.unsplash.com/random/',
      title: 'main title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.'
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/',
      title: 'about title',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque."
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/',
      title: 'contact title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.'
    },
      {
    id: 4,
    image: 'https://source.unsplash.com/random/',
    title: '4thlink title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.ur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit tempore consequuntur atque sit voluptatibus in voluptas distinctio quas est, perferendis, sunt assumenda. Eius voluptatum, magnam minus! Repellat quaerat aperiam itaque.'
  }
  ]);
});

app.listen(3000, function () {
  console.log('working');
});
