const mockData = `[
  {
    "id": 1,
    "title": "Iron Man",
    "date": "20080502"
  } ,
  {
    "id": 2,
    "title": "The Incredible Hulk",
    "date": "20080613"
  },
  {
    "id": 3,
    "title": "Iron Man 2",
    "date": "20100507"
  },
  {
    "id": 4,
    "title": "Thor",
    "date": "20110506"
  },
  {
    "id": 5,
    "title": "Captain America: The First Avenger",
    "date": "20110722"
  },
  {
    "id": 6,
    "title": "Marvel's The Avengers",
    "date": "20120504"
  }
]`;
jest.mock('fs', () => {
  return {
    readFileSync: jest.fn(() => mockData)
  }
})
const fileRepository = require('../../repository/file_movie_repository');

test('Test_FileMovieRepository_getMovies_01', async () => {
  expect.assertions(1);
  const result = await fileRepository.getMovies();
  expect(Array.isArray(result)).toBe(true);
})