const repository = require('../repository/file_repository');
const Character = require('../model/character');

module.exports = class CharacterService {

  static selectAll() {
    return repository.getCharacters();
  }

  static selectOne(id) {
    const dtoList = this.selectAll();
    for (let dto of dtoList) {
      if (selectedId == dto.id) {
        return dto;
      }
    }
    return null;
  }
}
