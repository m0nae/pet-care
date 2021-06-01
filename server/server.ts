require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const users = require("./routes/api/users");


app.use("/api/users", users);
app.use("/", (req: any, res: any) => {
  res.send("Main route");
});

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Port running on 8080");
  });
});
