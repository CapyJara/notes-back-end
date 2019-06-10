const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', async(req, res, next) => {
    console.log('req.body', req.body);
    try {
      const { title, body } = req.body;
      const note = await Note.create({ title, body });

      res.send(note);
    } catch(error) {
      next(error);
    }
  });
