const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const keys = require("./keys").google;
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

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
      const newUser = new User({
        name: profile.displayName,
        googleId: profile.id,
        image: profile.photos[0].value
      });
      // Check if the user already exists, else create new
      User.findOne({ googleId: newUser.googleId }).then(user => {
        if (!user) {
          newUser.save().then(user => {
            console.log(user);
            // Serialize the user
            done(null, user);
          });
        } else {
          console.log("User already exists");
          console.log(user);
          done(null, user);
        }
      });
    }
  )
);
