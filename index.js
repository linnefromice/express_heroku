const express = require('express');
const partials = require('express-partials');
const fs = require('fs');
const bodyParser = require('body-parser');

const pageRouter = require('./routes/page');
const apiCharacterRouter = require('./routes/api_character');
const apiMovieRouter = require('./routes/api_movie');

const app = express();
app.set('view engine', 'ejs');
app.use(partials())

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('', pageRouter);
app.use('/api/character', apiCharacterRouter);
app.use('/api/movie', apiMovieRouter);

const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
