const request = require('supertest');
const app = require('../../app');

test('Test_App_api_character', (done) => {
  request(app).get('/api/character').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('application/json')
    done();
  })
})

test('Test_App_api_character_1', (done) => {
  request(app).get('/api/character/1').then((response) => {
    expect(response.status).toBe(200)
    expect(response.type).toBe('application/json')
    done();
  })
})