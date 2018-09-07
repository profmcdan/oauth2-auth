const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile");
const passportSetup = require("./config/passport-setup");
const githubPassport = require("./config/passport-github");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

// set up view engine
app.set("view engine", "ejs");

// Set up cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect to db
mongoose.connect(
  keys.mongodb.dbURI,
  { useNewUrlParser: true },
  () => {
    console.log("Database Connected");
  }
);

//  Set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Create home route
app.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

// Listen to a port number
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
