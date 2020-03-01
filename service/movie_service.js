const repository = require('../repository/file_repository');
const Movie = require('../model/movie');

module.exports = class MovieService {

  static selectAll() {
    const jsonList = repository.getMovies();
    const dtoList = [];
    for (let json of jsonList) {
      dtoList.push(new Movie(json.id, json.title, json.date));
    }
    return dtoList;
  }
}
