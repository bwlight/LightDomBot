const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  console.log(message.content);
});

client.login("zQ1.XWHRBQ.QPA5YgxKrhGYf-6eNZsM0EFybgQ");
