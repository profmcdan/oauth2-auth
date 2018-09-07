const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const keys = require("./keys").google;

passport.use(
  new GoogleStrategy(
    {
      // options for the strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.clientID,
      clientSecret: keys.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback verify functions
      console.log("Passport callback function fired");
      console.log(profile);
    }
  )
);
