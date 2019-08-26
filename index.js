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
  } else if (message.content === `${prefix}server`) {
    message.channel.send  (`This Server's Name Is: ${message.guild.Name}`);
  }
});

client.login(token);
