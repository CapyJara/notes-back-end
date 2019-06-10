const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', async(req, res, next) => {
    try {
      const { title, body } = req.body;
      const note = await Note.create({ title, body });

      res.send(note);
    } catch(error) {
      next(error);
    }
  })
  .get('/', async(req, res, next) => {
    try {
      const noteArr = await Note.find();

      res.send(noteArr);
    } catch(error) {
      next(error);
    }
  });
