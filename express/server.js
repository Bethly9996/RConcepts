const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");

  res.render("index", { text: "World" });
});

app.use('/users', userRouter);

app.listen(3000);
