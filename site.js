const express = require('express');
const app = express();
const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require("././botsetting.json")
app.use(express.static('assets'));
app.set("views", "views");
app.set("view engine", "ejs")

app.get('/', function (req, res) {
  res.render('home', { users: bot.users.cache.size })
});

bot.on("ready", () => {
  app.listen(3000, () => { console.log("Listening on port 3000") })
})

bot.login(settings.token)