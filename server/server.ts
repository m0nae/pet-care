require("dotenv").config();
const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Port running on 8080");
  });
});
