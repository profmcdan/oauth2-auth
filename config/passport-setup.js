const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const keys = require("./keys").google;

passport.use(
  new GoogleStrategy({
    // options for the strategy
    clientID: keys.clientID,
    clientSecret: keys.clientSecret
  }),
  () => {
    // passport callback verify functions
  }
);
