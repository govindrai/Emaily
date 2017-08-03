// Modules
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Configurations
const { mongoURI, cookieKey } = require("./config/keys");

// Models
require("./models/User");

// Services
require("./services/passport");

mongoose.connect(mongoURI, { useMongoClient: true });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/auth")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
