const Discord = require('discord.js');




exports.run = async (client, message, params, args) => {
if (message.channel.id != "698964804299128954") return message.reply('Bu Komut Sadece <#698964804299128954> Kanalında Kullanılabilir!').then(m => m.delete(10000)); // id yapışıtr != "kanal idsi"
  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Cat Lounge`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setDescription(`**Aşağıdaki Kayıt Formumuzu Eksiksiz Doldurmanız Gerekmektedir.**\n\n**İsim:**\n
**Nick:**\n
**Yaş:**\n
**Steam Profil Linki:**\n
**Gelme Sebebi:**`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kayıt',
    description: 'kayıt',
    usage: 'kayıt'
  };