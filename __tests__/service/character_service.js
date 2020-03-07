const service = require('../../service/character_service');

test('Test_CharacterService_selectAll_01', () => {
  const result = service.selectAll();
  expect(Array.isArray(result)).toBe(true); 
})