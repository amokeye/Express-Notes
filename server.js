// Packages
const express = require("express");
const path = require("path");
const app = express();


const noteTitle = [];
const noteText = [];


//Sets uo Express app
const PORT = process.env.PORT || 3003;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //turns data into json object

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});





//=====================================================
  // Server listen
//=====================================================


app.listen(PORT, () => {
    console.log("API server now on port " + PORT);
});