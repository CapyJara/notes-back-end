const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', async(req, res, next) => {
    try {
      const { title, body } = req.body;
      const user = await Note 
        .create({ title, body });

      res.send(user);
    } catch(error) {
      next(error);
    }
  });
