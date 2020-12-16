// Packages
const express = require("express");
const path = require("path");

const noteTitle = [];
const noteText = [];


// Sets uo Express app
const PORT = process.env.PORT || 3003;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

// Turns data into json object
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//
app.listen(PORT, () => {
    console.log(`API server now on port + ${PORT}`);
});