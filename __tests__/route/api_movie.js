const request = require('supertest');
const app = require('../../app');

test('Test_App_api_movie', (done) => {
  request(app).get('/api/movie').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('application/json')
    done();
  })
})

test('Test_App_api_movie_1', (done) => {
  request(app).get('/api/movie/1').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('application/json')
    done();
  })
})

test('Test_App_api_movie_0', (done) => {
  request(app).get('/api/movie/0').then((response) => {
    expect(response.status).toBe(404)
    done();
  })
})