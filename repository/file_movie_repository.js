const fs = require('fs');
const Movie = require('../model/movie');

module.exports = class FileMovieRepository {
  static getMovies() {
    const data = fs.readFileSync('./data/movie.json', 'utf8');
    const jsonList = JSON.parse(data);
    const dtoList = [];
    for (let json of jsonList) {
      dtoList.push(new Movie(json.id, json.title, json.date));
    }
    return dtoList;
  }
}
