const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(':loudspeaker: | [**Yeni Bir Duyuru Var!**](https://discord.gg/dePdQy9)\n**Duyuru Mesajı: ' +mesaj+ '**')
      .addField("\n**Tek Tıkla Bağlan**","**JailBreak >** steam://connect/185.193.165.159:27015\n **Fun >** steam://connect/185.193.165.167:27015")
      message.guild.members.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + message.guild.memberCount + `** kullanıcıya gonderildi.`)
  .then(m => m.delete(5000));

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurla'],
  permLevel: 3
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'c!duyur [duyurmak istediğiniz şey]'
};