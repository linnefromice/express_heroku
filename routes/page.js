const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
  response.type('html')
  response.status(200).render('home', { title: "Home"});
});
router.get('/characters', function(request, response) {
  response.type('html')
  response.status(200).render('characters_page');
});
router.get('/movies', function(request, response) {
  response.type('html')
  response.status(200).render('movies_page');
});

module.exports = router;