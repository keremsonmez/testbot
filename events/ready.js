const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  var Discord = require("discord.js");
  var bot = new Discord.Client();

bot.on("ready", () => {
  client.user.setPresence({ game: { name: 'with depression' }, status: 'online' });
  bot.user.setGame('with depression', 'https://www.twitch.tv/quadria');
});
