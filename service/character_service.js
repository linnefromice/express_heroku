const repository = require('../repository/file_repository');

module.exports = class CharacterService {

  static selectAll() {
    return repository.getCharacters();
  }

  static selectOne(selectedId) {
    const dtoList = this.selectAll();
    for (let dto of dtoList) {
      if (selectedId == dto.id) {
        return dto;
      }
    }
    return null;
  }
}
