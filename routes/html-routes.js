// Package
var path = require("path");

// Constant to export router calls particular to this script
var router = require("express").Router();

// GET route to push notes data to notes HTML page
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET route to return index.html file
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router;