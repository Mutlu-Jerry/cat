  const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`rol-ver` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**').catch(console.error);
user.addRole('696045195237785640').then(user.addRole('699984672758956112')).then(user.addRole('487316186367787018'));
   
   const embed = new Discord.RichEmbed()
        .setDescription(`${user} kullanıcısına başarıyla JB Cat rolü verildi!`)
        .setFooter('Rol verme sistemi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'jbcat',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'c!jbkaptan [kullanıcı]'
};