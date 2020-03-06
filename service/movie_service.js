const repository = require('../repository/file_repository');
const Movie = require('../model/movie');

module.exports = class MovieService {

  static selectAll() {
    return repository.getMovies();
  }
}
