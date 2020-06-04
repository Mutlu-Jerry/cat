const Discord = require('discord.js');




exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`𝕮atLounge`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`<a:elmas:697569684677197824> 𝕮atLounge - Adminlik Fiyatları <a:elmas:697569684677197824>`, 
                `\n
**Yetkilerimiz aylık olarak sunulacaktır.**\n
<a:mor:697569680025714799> | **VIP** = 15 ₺\n
                 <a:mor:697569680025714799> | **ADMIN** = 25 ₺\n
                 <a:mor:697569680025714799> | **MASTER ADMIN** = 40 ₺\n
                 <a:mor:697569680025714799> | **KAPTAN** = 60 ₺\n
                 <a:mor:697569680025714799> | **CAT** = 80 ₺ (3 Aylık Alanlara Sınırsız Market)\n
                 <a:mor:697569680025714799> | **SINIRSIZ MARKET** = 150 ₺ `)
                  
  
  
  
  
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['adminlikfiyatları', 'fiyatlar'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'adminlik',
    description: 'Adminlik Fiyatlarını Gösterir.',
    usage: 'c!adminlik'
  };