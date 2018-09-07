const router = require("express").Router();
const passport = require("passport");

const User = require("../models/User");

// Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

// Auth Log out  /auth/login
router.get("/logout", (req, res) => {
  // [TODO] -- Handle with passport
  res.send("Logging out -- [TODO]");
});

// Auth with google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // [TODO] -- Process the returned code
  res.send("You reached the callback uri");
});

module.exports = router;
