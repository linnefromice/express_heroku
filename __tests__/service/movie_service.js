const service = require('../../service/movie_service');
const Movie = require('../../model/Movie');

test('Test_MovieService_selectAll_01', () => {
  const result = service.selectAll();
  expect(Array.isArray(result)).toBe(true);
  for (let dto of result) {
    // expect(dto instanceof Movie).toBe(true)
    expect(dto.constructor.name).toBe(Movie.name)
  }
})