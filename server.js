var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

});

app.get('/pages', function (req, res) {
  res.json([
    {
      id: 1;
      title: 'main title',
      content: 'Lorem ipsum 1'
    },
    {
      id: 2;
      title: 'about title',
      content: 'Lorem ipsum 2'
    },
    {
      id: 3;
      title: 'contact title',
      content: 'Lorem ipsum 3'
    }
  ]);
});

app.listen(3000, function () {
  console.log('working');
});
