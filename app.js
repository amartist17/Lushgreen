const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("real-estate");
});
app.get("/shop", (req, res) => {
  res.render("shop");
});
app.get("/blogs", (req, res) => {
  res.render("blogs");
});

module.exports = app;
