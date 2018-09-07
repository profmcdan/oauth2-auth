var GitHubStrategy = require("passport-github").Strategy;
const passport = require("passport");
const User = require("../models/User");
const keys = require("./keys").github;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: "/auth/github/redirect"
    },
    function(accessToken, refreshToken, profile, done) {
      const newUser = new User({
        name: profile.displayName,
        githubId: profile.id,
        image: profile.photos[0].value
      });
      User.findOne({ githubId: newUser.githubId }).then(user => {
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
