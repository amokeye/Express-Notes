// fs module needed for reading from/writing to files
const fs = require("fs");

// Importing of package (uuid) that generates unique id for each note
import { v1 as uuidv1 } from 'uuid';

//
class JSONnotes {
  readNotes() {
    return fs.readFile("db/db.json", 'utf8', function (err) {
      if (err) throw err;
    });
  }

  // Function to convert note data and write it to database
  writeNotes(note) {
    return fs.writeFile("db/db.json", JSON.stringify(note), function (err) {
      if (err) throw err;
    });
  }

  // Function to parse JSON data so that it's readable for server
  getNotes() {
    return this.readNotes()
      .then(notesArr => {
        let notes = JSON.parse(notesArr);
        return notes;
      });
  }

  // Function to add note to database
  addNote(note) {
    
    // Constant containing the objects for title and text of notes
    const { title, text } = note;

    // Ensure that note has both title and text
    if (!title || !text) {
      throw new Error("Please add title and text to note");
    } else {

    // Generate unique for each note
    const newNote = { title, text, id: uuidv1() };

    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.getNotes()
      .then(notesArr => [notesArr, newNote])
      .then(updatedNotes => this.writeNotes(updatedNotes))
      .then(() => newNote);
  }}

  deleteNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    return this.getNotes()
      .then(notesArr => notesArr.filter(note => note.id !== id))
      .then(filteredNotes => this.write(filteredNotes));
  }
}

module.exports = new JSONnotes();