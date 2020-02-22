const express = require('express');
const partials = require('express-partials');
const fs = require('fs');
const bodyParser = require('body-parser');

const pageRouter = require('./routes/page');
const apiCharacterRouter = require('./routes/api_character');

const app = express();
app.set('view engine', 'ejs');
app.use(partials())

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('', pageRouter);
app.use('/api/character', apiCharacterRouter);

app.get('/api/movie', (request, response) => {
  fs.readFile('./data/movie.json', 'utf8', (err, data) => {
    response.send(JSON.parse(data));
  });
});

app.get('/api/movie/:id', (request, response) => {
  const selectedId = request.params.id;

  fs.readFile('./data/movie.json', 'utf8', (err, data) => {
    const jsonData = JSON.parse(data)
    for (let dto of jsonData) {
      if (selectedId == dto.id) {
        response.send(dto)
        return
      }
    }
    response.send(jsonData)
  });
})

const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
