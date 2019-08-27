module.exports = {
  name:'server',
  description: 'Server Info',
  execute(message, args) {
    message.channel.send  (`This Server's Name Is: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
  },
};
