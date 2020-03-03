const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
  response.status(200).render('home', { title: "Home"});
});

module.exports = router;