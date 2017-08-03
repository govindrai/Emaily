// Modules
const express = require("express");

// Services
require("./services/passport");

const app = express();

// Routes
require("./routes/auth")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
