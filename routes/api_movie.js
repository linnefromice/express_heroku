const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (request, response) => {
  const data = fs.readFileSync('./data/movie.json', 'utf8');
  response.send(JSON.parse(data));
});

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  const data = fs.readFileSync('./data/movie.json', 'utf8');
  
  const jsonData = JSON.parse(data)
  for (let dto of jsonData) {
    if (selectedId == dto.id) {
      response.send(dto)
      return
    }
  }
  response.send(jsonData);
})

module.exports = router;