const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const app = express();

// set up view engine
app.set("view engine", "ejs");

//  Set up routes
app.use("/auth", authRoutes);

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

// Listen to a port number
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
