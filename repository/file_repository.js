const fs = require('fs');

module.exports = class FileRepository {
  static getMovies() {
    const data = fs.readFileSync('./data/movie.json', 'utf8');
    return JSON.parse(data);
  }

  static getCharacters() {
    const data = fs.readFileSync('./data/character.json', 'utf8');
    return JSON.parse(data);
  }
}
