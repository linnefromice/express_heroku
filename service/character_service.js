const repository = require('../repository/file_repository');
const Character = require('../model/character');

module.exports = class CharacterService {

  static selectAll() {
    const jsonList = repository.getCharacters();
    const dtoList = [];
    for (let json of jsonList) {
      dtoList.push(new Character(json.id, json.name, json.joinedTime));
    }
    return dtoList;
  }
}
