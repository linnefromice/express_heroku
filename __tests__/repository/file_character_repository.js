const mockData = `[
  {
    "id": 1,
    "name": "Captain America",
    "joinedTime": "196403"
  },
  {
    "id": 2,
    "name": "Iron Man",
    "joinedTime": "196309"
  },
  {
    "id": 3,
    "name": "Thor",
    "joinedTime": "196309"
  },
  {
    "id": 4,
    "name": "Hawkeye",
    "joinedTime": "196505"
  },
  {
    "id": 5,
    "name": "Hulk",
    "joinedTime": "196309"
  },
  {
    "id": 6,
    "name": "Black Widow",
    "joinedTime": "197305"
  },
  {
    "id": 7,
    "name": "Falcon",
    "joinedTime": "197906"
  }
]`;

jest.mock('fs', () => {
  return {
    readFileSync: jest.fn(() => mockData)
  }
})
const fs = require('fs');
const fileRepository = require('../../repository/file_character_repository');

test('Test_FileCharactersRepository_getCharacters_01', async () => {
  expect.assertions(1);
  const result = await fileRepository.getCharacters();
  expect(Array.isArray(result)).toBe(true);
})