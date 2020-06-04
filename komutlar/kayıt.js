const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  
  const yetkyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Komutu Kullanmak İçin Yeterli İzine Sahip Değilsin`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("ADMINISTRATOR"))
    return message.chanel.send(yetkyok)
  
  if(args[0] == "kayıt-görevlisi-rolü") {
    
    var kgr = message.mentions.roles.first()
    
    const dudu = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Rol Belirtmelisin`, message.author.avatarURL)
    
    if (!kgr)
      return message.channel.send(dudu)
    
    db.set(`kskgrol${message.guild.id}`, kgr.id)
    
    const tmds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Kayıt Görevlisi Rolü Başarıyla Ayarlandı`, message.author.avatarURL)
    
    message.channel.send(tmds)
    
    return
    
  }
  
  if(args[0] == "yardım") {
    
    const yardim = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Kayıt Sistemi Yardım`)
    .setFooter(`Alwose`)
    .addField(`kayıt verilecek-rol @Rol`, `Kayıt Edilince Verilecek Rolü Ayarlar`)
    .addBlankField()
    .addField(`kayıt alınacak-rol @Rol`, `Kayıt Edilince Alınacak Rolü Ayarlar`)
    .addBlankField()
    .addField(`kayıt tag (Tagınız)`, `Kayıt Edilince İsminin Başına Yazılacak Tagı Ayarlarsınız. NOT: Tagı Sadece Sayı Yaparsanız Hata Verir Örneğin 10 Diye Bir Tag Ayarlarsanız Hata Verir. Ama Sayı ve Harf/Sembol Kullanarak Yaparsanız Hata Vermez Örneğin 10Bir`)
    .addBlankField()
    .addField(`kayıt kayıt-görevlisi-rolü @Rol`, `Kayıt Görevlisi Rolü Ayarlarsınız. NOT : Sunucu Sahibi Olsanız Dahi Ayarladığınız Rol Sizde Yoksa Kayıt Et Komutunu Kullanamazsınız`)
    .addBlankField()
    .addField(`kayıt et @Kişi (İsim) (Yaş)`, `Kayıt Edersiniz`)
    
    message.channel.send(yardim)
    
    return
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt"],
  perm: 0
}

exports.help = {
  name: "kayıt",
  description: "Kayıt Sistemi",
  usage: "kayıt"
}