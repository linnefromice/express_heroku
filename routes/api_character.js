const express = require('express');
const router = express.Router();
const Service = require('../service/character_service');

router.get('/', (request, response) => {
  const dtoList = Service.selectAll();
  response.type('json')
  response.status(200).send(dtoList)
})

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  const dtoList = Service.selectAll();

  for (let dto of dtoList) {
    if (selectedId == dto.id) {
      response.type('json')
      response.status(200).send(dto);
      return
    }
  }
  response.type('json')
  response.status(200).send(dtoList)
})

module.exports = router;