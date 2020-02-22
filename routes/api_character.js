const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (request, response) => {
  fs.readFile('./data/character.json', 'utf8', (err, data) => {
    response.send(JSON.parse(data));
  });
})

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  fs.readFile('./data/character.json', 'utf8', (err, data) => {
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

module.exports = router;