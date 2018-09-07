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
  req.logout();
  res.redirect("/");
});

// Auth with google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // [TODO] -- Process the returned code
  // res.send(req.user);
  res.redirect("/profile");
});

// GITHUB
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/redirect",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/profile");
  }
);

// FACEBOOK
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;
