const repository = require('../repository/file_movie_repository');

module.exports = class MovieService {
  static selectAll() {
    return repository.getMovies();
  }

  static selectOne(selectedId) {
    const dtoList = this.selectAll();
    for (let dto of dtoList) {
      if (selectedId == dto.id) {
        return dto;
      }
    }
    return null;
  }
}
