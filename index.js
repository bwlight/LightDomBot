const Discord = require("discord.js");
const Bot = new Discord.Client();
const {token, prefix} = require('./settings.json');

Bot.once("ready", () => {
  console.log("I am ready to Dominate!");
});


Bot.on('message', message => {
  if (message.author === Bot.user) return;
  if (message.content.startsWith(`${prefix}ping`)) {
  	message.channel.send('Pong.');
  } else if (message.content === `${prefix}server`) {
    message.channel.send  (`This Server's Name Is: ${message.guild.Name}`);
  }
});

Bot.login(token);
