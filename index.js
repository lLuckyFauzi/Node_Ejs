const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const homeRoutes = require("./routes/homeRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(homeRoutes);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(4000, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
