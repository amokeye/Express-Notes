// fs module needed for reading from/writing to files
const fs = require("fs");

// Importing of package (uuid) that generates unique id for each note
const { v1: uuidv1 } = require('uuid');

// Class for read, write, add, and delete note functionality
class JSONnotes {
  readNotes() {
    const notesArr = fs.readFileSync("db/db.json", 'utf8');
    // Function to parse JSON data so that it's readable for server
    const notes = JSON.parse(notesArr);
    return notes;
  }

  // Function to convert note data and write it to database
  writeNotes(notes) {
    fs.writeFileSync("db/db.json", JSON.stringify(notes))
  }

  // Function to add note to database
  addNote(note) {

    // Constant containing the objects for title and text of notes
    const { title, text } = note;

    // Ensure that note has both title and text
    if (!title || !text) {
      throw new Error("Please add title and text to note");
    } else {

      // Generate unique id for each note
      const newNote = { title, text, id: uuidv1() };

      // Get all notes, add the new note, write all the updated notes, return the newNote
      const notesArr = this.readNotes();
      notesArr.push(newNote);
      this.writeNotes(notesArr);
    }
  }

  // Function to delete selected notes
  deleteNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    const notesArr = this.readNotes();
    const filteredNotes = notesArr.filter(note => note.id !== id)
    this.writeNotes(filteredNotes);
  }
}

module.exports = new JSONnotes();