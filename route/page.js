const express = require('express');
const router = express.Router();
const characterService = require('../service/character_service');
const movieService = require('../service/movie_service');

router.get('/', function(request, response) {
  response.type('html')
  response.status(200).render('home', { title: "Home" });
});
router.get('/characters', function(request, response) {
  response.type('html')
  response.status(200).render('characters_page', { list: characterService.selectAll() });
});
router.get('/movies', function(request, response) {
  response.type('html')
  response.status(200).render('movies_page', { list: movieService.selectAll() });
});

module.exports = router;