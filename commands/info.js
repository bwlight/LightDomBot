module.exports = {
  name: 'info',
  description: 'User Info',
  execute(message, args) {
    message.channel.send(`${message.author.username}\nYour ID: ${message.author.id}`);
  },
};
