const express = require('express');
const router = express.Router();
const repository = require('../repository/FileRepository');

router.get('/', (request, response) => {
  const jsonList = repository.getMovies();
  response.send(jsonList);
});

router.get('/:id', (request, response) => {
  const selectedId = request.params.id;

  const jsonList = repository.getMovies();
  
  for (let dto of jsonList) {
    if (selectedId == dto.id) {
      response.send(dto)
      return
    }
  }
  response.send(jsonList);
})

module.exports = router;