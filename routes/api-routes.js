// Constant to export router calls
const router = require("express").Router();

//
const fxns = require("../db/note-fxns");

// GET route to get all entered notes from user
router.get("/api/notes", function (req, res) {
  // Import store variable
  const notes = fxns.readNotes();
  res.json(notes);
});

// POST route to post info to database
router.post("/api/notes", (req, res) => {
  // Import store variable
  fxns.addNote(req.body);
  res.json(req.body);
});

// DELETE route to delete the notes with specific id
router.delete("/api/notes/:id", function (req, res) {
  // Import store variable
  fxns.deleteNote(req.params.id)
  res.json({ ok: true })
});

module.exports = router;