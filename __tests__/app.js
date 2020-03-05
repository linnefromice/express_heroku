const request = require('supertest');
const app = require('../app');

test('Test_App_page_home', (done) => {
  request(app).get('/').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
    done();
  })
})

test('Test_App_page_characters', (done) => {
  request(app).get('/characters').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
    done();
  })
})

test('Test_App_page_movies', (done) => {
  request(app).get('/movies').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
    done();
  })
})
