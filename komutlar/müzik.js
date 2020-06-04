const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`,'**c!oynat:** İstediğin şarkıyı çalar.\n**c!durdur:** Müziği durdurur.\n**c!devam:** Müziği devam ettirir.\n**c!kuyruk:** Kuyruğu söyler\n**c!geç:** Geçerli çalınan müziği geçer\n**c!ses:** Belirlediğiniz değerde sesi açar.\n**c!ayrıl:** Müziği kapatır.')
  .setFooter(`Cat Lounge Bot - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Oralet Bildirme: /müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.send(müzik);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'c!müzik'
  };