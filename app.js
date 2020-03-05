const express = require('express');
const partials = require('express-partials');
const bodyParser = require('body-parser');

const routes = require('./routes');

// init setting
const app = express();
app.set('view engine', 'ejs');
app.use(partials())
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000));

// setting router
app.use('', routes.page);
app.use('/api/character', routes.apiCharacter);
app.use('/api/movie', routes.apiMovie);

module.exports = app