const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/animals');
const { notes } = require('../../data/animals');

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note is not properly formatted.');
    } else {
      const note = createNewNote(req.body, note);
      res.json(note);
    }
  });

  module.exports = router;