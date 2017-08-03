// Modules
const express = require("express");
const mongoose = require("mongoose");

// Configurations
const mongoURI = require("./config/keys").mongoURI;

// Models
require("./models/User");

// Services
require("./services/passport");

mongoose.connect(mongoURI, { useMongoClient: true });

const app = express();

// Routes
require("./routes/auth")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
