const fs = require('fs');

module.exports = class FileRepository {
  static getMovies() {
    return fs.readFileSync('./data/movie.json', 'utf8');
  }

  static getCharacters() {
    return fs.readFileSync('./data/character.json', 'utf8');
  }
}
