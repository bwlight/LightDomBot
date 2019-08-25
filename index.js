const Discord = require("discord.js");
const client = new Discord.Client();
const {token, prefix} = require('./settings.json');

client.once("ready", () => {
  console.log("I am ready to Dominate!");
});


client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(`${prefix}ping`)) {
  	message.channel.send('Pong.');
  }
});

client.login(token);
