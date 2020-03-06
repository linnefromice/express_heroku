const express = require('express');
const router = express.Router();
const Service = require('../service/movie_service');

router.get('/', (request, response) => {
  const dtoList = Service.selectAll();
  response.type('json')
  response.status(200).send(dtoList);
});

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;
  const dto = Service.selectOne(selectedId);
  if (dto != null) {
    response.type('json')
    response.status(200).send(dto)
    return
  }
  response.sendStatus(404)
})

module.exports = router;