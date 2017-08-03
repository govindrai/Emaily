// Modules
const express = require("express");
const mongoose = require("mongoose");
const mongoURI = require("./config/keys").mongoURI;

// Services
require("./services/passport");
mongoose.connect(mongoURI, { useMongoClient: true });

const app = express();

// Routes
require("./routes/auth")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
