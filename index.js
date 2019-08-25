const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');

client.once("ready", () => {
  console.log("I am ready to Dominate!");
});

var prefix = "~"
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong a working!");
    }
});

client.login(settings.token);
