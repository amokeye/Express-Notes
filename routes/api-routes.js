// Constant to export router calls
const router = require("express").Router();

//
const store = require("../db/store");

// GET route to get all entered notes from user
router.get("/notes", function(req, res) {
    // Import store variable
  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(404).json(err));
});

// POST route to post info to database
router.post("/notes", (req, res) => {
    // Import store variable
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(404).json(err));
});

// DELETE route to delete the notes with specific id
router.delete("/notes/:id", function(req, res) {
    // Import store variable
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(404).json(err));
});

module.exports = router;