const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
  response.render('home', { title: "Home"});
});

module.exports = router;