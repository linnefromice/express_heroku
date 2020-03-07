const service = require('../../service/character_service');
const Character = require('../../model/character');

test('Test_CharacterService_selectAll_01', () => {
  const result = service.selectAll();
  expect(Array.isArray(result)).toBe(true);
  for (let dto of result) {
    expect(dto instanceof Character).toBe(true)
  }
})