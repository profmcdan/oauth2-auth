const router = require("express").Router();

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
router.get("/google", (req, res) => {
  // [TODO] -- Handle with Passport
  res.send("Logging in with Google -- [TODO]");
});

module.exports = router;
