const Movie = require('../../model/movie');

test('Test_Movie_01', () => {
  const dto = new Movie(0, "Spider Man", "20170707");
  expect(dto.id).toBe(0)
  expect(dto.title).toBe("Spider Man")
  expect(dto.date).toBe("20170707")
})

test('Test_Movie_02', () => {
  const dto = new Movie();
  expect(dto.id).toBe(undefined)
  expect(dto.title).toBe(undefined)
  expect(dto.date).toBe(undefined)
})

test('Test_Movie_03', () => {
  const dto = new Movie(999);
  expect(dto.id).toBe(999)
  expect(dto.title).toBe(undefined)
  expect(dto.date).toBe(undefined)
})

test('Test_Movie_04', () => {
  const dto = new Movie(999, "XXXX");
  expect(dto.id).toBe(999)
  expect(dto.title).toBe("XXXX")
  expect(dto.date).toBe(undefined)
})

test('Test_Movie_05', () => {
  const dto = new Movie(999, "XXXX", "yyyyMMdd");
  expect(dto.id).toBe(999)
  expect(dto.title).toBe("XXXX")
  expect(dto.date).toBe("yyyyMMdd")
})
