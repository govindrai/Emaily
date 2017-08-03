// Modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

// Configurations
const keys = require("../config/keys");

// Models
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(user => {
        if (!user) {
          new User({ googleId: profile.id }).save().then(user => {
            done(null, user);
          });
        }
        done(null, user);
      });
    }
  )
);
