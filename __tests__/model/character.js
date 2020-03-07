const Character = require('../../model/character');

test('Test_Character_01', () => {
  const dto = new Character(0, "Spider Man", "200506");
  expect(dto.id).toBe(0)
  expect(dto.name).toBe("Spider Man")
  expect(dto.joinedTime).toBe("200506")
})

test('Test_Character_02', () => {
  const dto = new Character();
  expect(dto.id).toBe(undefined)
  expect(dto.name).toBe(undefined)
  expect(dto.joinedTime).toBe(undefined)
})

test('Test_Character_03', () => {
  const dto = new Character(999);
  expect(dto.id).toBe(999)
  expect(dto.name).toBe(undefined)
  expect(dto.joinedTime).toBe(undefined)
})

test('Test_Character_04', () => {
  const dto = new Character(999, "XXXX");
  expect(dto.id).toBe(999)
  expect(dto.name).toBe("XXXX")
  expect(dto.joinedTime).toBe(undefined)
})

test('Test_Character_05', () => {
  const dto = new Character(999, "XXXX", "yyyyMM");
  expect(dto.id).toBe(999)
  expect(dto.name).toBe("XXXX")
  expect(dto.joinedTime).toBe("yyyyMM")
})
