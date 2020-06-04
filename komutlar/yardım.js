const Discord = require('discord.js');




exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`𝕮atLounge`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:ayar:697569685293498409> Komutlar <a:ayar:697569685293498409>`, 
                `<a:yesil:697569680558391396> | **c!adminlik** = Adminlik Fiyatlarını Yazdırır.\n
                 <a:yesil:697569680558391396> | **c!fiyatlar** = Adminlik Fiyatlarını Yazdırır.\n
                 <a:yesil:697569680558391396> | **c!ip** = Sunucularımızın IP Adreslerini ve Doluluğunu Gösterir.\n
                 <a:yesil:697569680558391396> | **c!steam / c!grup / c!steamgrup** = Steam Grup Linkini Gösterir.\n
                 <a:yesil:697569680558391396> | **c!müzik** = Müzik Menüsü!.`)
                  
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };