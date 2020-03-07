const fs = require('fs');
const Character = require('../model/character');

module.exports = class FileCharacterRepository {
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
