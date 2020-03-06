const repository = require('../repository/file_repository');
const Movie = require('../model/movie');

module.exports = class MovieService {

  static selectAll() {
    return repository.getMovies();
  }

  static selectOne(id) {
    const dtoList = this.selectAll();
    for (let dto of dtoList) {
      if (selectedId == dto.id) {
        return dto;
      }
    }
    return null;
  }
}
