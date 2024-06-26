const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "500mb",
  })
);
app.use(bodyParser.json());

// Route Imports
const user = require("./routes/userRoute");
const course = require("./routes/courseRoute");
const schedule = require("./routes/scheduleRoute");

app.use("/api/v1", user);
app.use("/api/v1", course);
app.use("/api/v1", schedule);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
