require("dotenv").config();
const express = require("express");
const session = require("express-session");

const app = express();

const checkForSession = require("./middlewares/checkForSession");
const swagController = require("./controllers/swagController");

let { SESSION_SECRET, SERVER_PORT } = process.env;

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkForSession);

app.get("/api/swag", swagController.read);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on Port ${SERVER_PORT}`);
});
