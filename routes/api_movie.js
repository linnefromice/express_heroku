const express = require('express');
const router = express.Router();
const Service = require('../service/movie_service');

router.get('/', (request, response) => {
  const dtoList = Service.selectAll();
  response.send(dtoList);
});

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  const dtoList = Service.selectAll();
  
  for (let dto of dtoList) {
    if (selectedId == dto.id) {
      response.send(dto)
      return
    }
  }
  response.send(dtoList);
})

module.exports = router;