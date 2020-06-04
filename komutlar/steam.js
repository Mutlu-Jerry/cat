const Discord = require('discord.js');




exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`𝕮atLounge`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`<a:right:697569679685976175>** | https://steamcommunity.com/groups/CattLounge**`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['grup', 'steamgrup','gurup'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'steam',
    description: 'Steam Grubunu Gösterir.',
    usage: 'c!steam'
  };