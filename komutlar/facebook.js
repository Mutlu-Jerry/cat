const Discord = require('discord.js');




exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`𝕮atLounge`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`<a:right:697569679685976175>** | https://www.facebook.com/catloungee/**`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['face','facebook'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'fb',
    description: 'Facebook Sayfamızı Gösterir.',
    usage: 'c!fb'
  };