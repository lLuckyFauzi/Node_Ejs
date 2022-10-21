const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 4000;

// getting-started.js
async function main() {
  await mongoose.connect(
    "mongodb+srv://Lynne:lucky123@cluster0.tltsg18.mongodb.net/mahasiswa?retryWrites=true&w=majority",
    () => {
      console.log("database conected");
    }
  );

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
main().catch((err) => console.log(err));

const homeRoutes = require("./routes/homeRoutes");
const siswaRoutes = require("./routes/siswa");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(homeRoutes);
app.use(siswaRoutes);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(4000, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
