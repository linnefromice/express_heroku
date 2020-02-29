const express = require('express');
const router = express.Router();
const repository = require('../repository/FileRepository');

router.get('/', (request, response) => {
  const data = repository.getCharacters();
  response.send(JSON.parse(data));
})

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  const data = repository.getCharacters();

  const jsonData = JSON.parse(data)
  for (let dto of jsonData) {
    if (selectedId == dto.id) {
      response.send(dto)
      return
    }
  }
  response.send(jsonData)
})

module.exports = router;