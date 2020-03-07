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

test('Test_MovieService_selectOne_01', () => {
  const result = service.selectOne(1);
  // expect(result instanceof Movie).toBe(true);
  expect(result.constructor.name).toBe(Movie.name)
  expect(result.id).toBe(1);
  const resultTwo = service.selectOne(2);
  expect(resultTwo.id).toBe(2);
})