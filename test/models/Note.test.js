require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const Note = require('../../lib/models/Note');

describe('Note model', () => {

  beforeAll(() => {
    return connect();
  });
  
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a note', () => {
    return Note.create({
      title: 'title',
      body: 'body of post'
    })
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.any(mongoose.Types.ObjectId),
          title: 'title',
          body: 'body of post'
        });
      });
  });
});
