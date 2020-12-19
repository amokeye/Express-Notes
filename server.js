// Packages
const express = require("express");
const path = require("path");

const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

// PORT for Express app
const PORT = process.env.PORT || 3003;

// Introduces Express.js into server
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

// Turns data into json object
app.use(express.json());

app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

//
app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}`);
});