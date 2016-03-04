var express = require('express');
var fs = require('fs');
var file = 'data.db';
var sqlite = require('sqlite3').verbose();
var app = express();
var db = new sqlite.Database(file);

app.use(express.static('public'));

app.get('/', function (req, res) {

});

app.get('/pages', function (req, res) {
  db.serialize(function() {
    db.each('SELECT * FROM pages', function(err, row) {
      console.log(row.id + ': ' + row.title);
    });
  });
  db.close();
});

app.listen(3000, function () {
  console.log('working');
});
