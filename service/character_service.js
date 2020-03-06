const repository = require('../repository/file_repository');
const Character = require('../model/character');

module.exports = class CharacterService {

  static selectAll() {
    return repository.getCharacters();
  }
}
