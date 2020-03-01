const express = require('express');
const router = express.Router();
const repository = require('../repository/FileRepository');
const Character = require('../models/Character');

router.get('/', (request, response) => {
  const data = repository.getCharacters();
  const jsonList = JSON.parse(data);

  const dtoList = [];
  for (let json of jsonList) {
    dtoList.push(new Character(json.id, json.name, json.joinedTime));
  }

  response.send(dtoList)
})

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  const data = repository.getCharacters();
  const jsonList = JSON.parse(data);

  const dtoList = [];
  for (let json of jsonList) {
    dtoList.push(new Character(json.id, json.name, json.joinedTime));
  }

  for (let dto of dtoList) {
    if (selectedId == dto.id) {
      response.send(dto);
      return
    }
  }
  response.send(dtoList)
})

module.exports = router;