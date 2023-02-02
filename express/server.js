const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.set("view engine", "ejs");
app.use(logger);
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  console.log("Here");

  res.render("index", { text: "World" });
});

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(4000);
