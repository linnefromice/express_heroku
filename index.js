const express = require('express');
const partials = require('express-partials');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(partials())

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.render('home', { title: "Home"});
});

app.get('/api/movie', (request, response) => {
  fs.readFile('./data/movie.json', 'utf8', (err, data) => {
    response.send(JSON.parse(data));
  });
});

app.get('/api/character', (request, response) => {
  fs.readFile('./data/character.json', 'utf8', (err, data) => {
    response.send(JSON.parse(data));
  });
})

const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
