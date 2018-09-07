const express = require("express");

const app = express();

// set up view engine
app.set("view engine", "ejs");

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

// Listen to a port number
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
