const express = require ("express");
const app = require("liquid-express-views")(express())
const drinks = require("./models/drinks.js")

app.get("/", (req, res) => {
  res.send('Welcome to the Gitpub App!')
})

app.get("/drinks", (req, res) => {
  res.render("index.liquid", {
  drinks: drinks,
  })
})

app.listen(3000, () => {
  console.log("I hear you")
});

