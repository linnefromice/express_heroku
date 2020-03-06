const fs = require('fs');

module.exports = class FileRepository {
  static getMovies() {
    const data = fs.readFileSync('./data/movie.json', 'utf8');
    const jsonList = JSON.parse(data);
    const dtoList = [];
    for (let json of jsonList) {
      dtoList.push(new Movie(json.id, json.title, json.date));
    }
    return dtoList;
  }

  static getCharacters() {
    const data = fs.readFileSync('./data/character.json', 'utf8');
    const jsonList = JSON.parse(data);
    const dtoList = [];
    for (let json of jsonList) {
      dtoList.push(new Character(json.id, json.name, json.joinedTime));
    }
    return dtoList;
  }
}
