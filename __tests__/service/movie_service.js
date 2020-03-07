const service = require('../../service/movie_service');

test('Test_MovieService_selectAll_01', () => {
  const result = service.selectAll();
  expect(Array.isArray(result)).toBe(true); 
})