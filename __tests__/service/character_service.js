const service = require('../../service/character_service');
const Character = require('../../model/character');

test('Test_CharacterService_selectAll_01', () => {
  const result = service.selectAll();
  expect(Array.isArray(result)).toBe(true);
  for (let dto of result) {
    expect(dto instanceof Character).toBe(true)
  }
})

test('Test_CharacterService_selectOne_01', () => {
  const result = service.selectOne(1);
  expect(result instanceof Character).toBe(true);
  expect(result.id).toBe(1);
  const resultTwo = service.selectOne(2);
  expect(resultTwo.id).toBe(2);
})