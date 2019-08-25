const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');

client.once("ready", () => {
  console.log("I am ready!");
})
var prefix = "~"
client.on("message", (message) => {
  if (message.author === client.user) return;
  if (message.content.startwith === (prefix + "!ping")) {
    message.channel.sendMessage("pong!");
  }
});

client.login(settings.token);
