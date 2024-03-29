const fs = require ('fs');
const Discord = require("discord.js");
const Bot = new Discord.Client();
const {token, prefix} = require('./settings.json');
Bot.commands = new Discord.Collection

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
  	const command = require(`./commands/${file}`);
  	Bot.commands.set(command.name, command);
  }

const cooldowns = new Discord.Collection();

Bot.once("ready", () => {
  console.log("I am ready to Dominate!");
});


Bot.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = Bot.commands.get(commandName)
    		|| Bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
// Section One
      if (!command) return;
        //No DM commands
      if (command.guildOnly && message.channel.type !== 'text') {
		      return message.reply('I can\'t execute that command inside DMs!');
	       }
        //No Args
         if (command.args && !args.length) {
           let reply = `You didn't provide any arguments, ${message.author}!`;
        //Fix the commands
		     if (command.usage) {
			        reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		          }

		return message.channel.send(reply);
	}
// Section End

//Section Two
      if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
      }

      const now = Date.now();
      const timestamps = cooldowns.get(command.name);
      const cooldownAmount = (command.cooldown || 3) * 1000;

            if (timestamps.has(message.author.id)) {
              const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

              if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
              }
            }
            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

            try {
              command.execute(message, args);
            } catch (error) {
              console.error(error);
              message.reply('there was an error trying to execute that command!');
            }
      });
//Section End

Bot.login(token);
