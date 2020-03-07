const express = require('express');
const partials = require('express-partials');
const bodyParser = require('body-parser');

const route = require('./route');

// init setting
const app = express();
app.set('view engine', 'ejs');
app.use(partials())
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000));

// setting router
app.use('', route.page);
app.use('/api/character', route.apiCharacter);
app.use('/api/movie', route.apiMovie);

module.exports = app