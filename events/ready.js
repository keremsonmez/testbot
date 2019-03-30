const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  var Discord = require("discord.js");
  var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Botumuz şuanda  " + bot.guilds.size + " serverda hizmet veriyor");
  bot.user.setGame("Subscroob,Like", "https://www.twitch.tv/quadria")
  
});
