require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const request = require('supertest');
const app = require('../../lib/app');

describe('note routes', () => {

  beforeAll(() => {
    return connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
  });


  it('post new note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({
        title: 'title',
        body: 'post body'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'title',
          body: 'post body'
        });
      });
  });
});
