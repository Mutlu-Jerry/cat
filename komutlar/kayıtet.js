const Discord = require("discord.js");
const data = require('quick.db');
exports.run = async (client, message, args) => {
if(!message.member.roles.has(`698967834675511338`)) return;

  
if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let role = message.guild.roles.get(`495695743663996928`)// Erkek rol id
let unregistered = message.guild.roles.get(`698961990932234330`)// Kayıtsız rol id
let channel = message.guild.channels.get(`700063684663443558`) && message.guild.channels.get(`714874310082166866`) && message.channel// Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
let isim = args[1];
if(!isim) return message.channel.send(`${args[0]}, için bir isim girmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)
  
let nick = args[2];
if(!isim) return message.channel.send(`${args[0]}, için bir isim girmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)  

let yaş = args[3];
if(!yaş) return message.channel.send(`${args[0]}, için bir isim gir.`)
if(yaş.length > 2) return message.channel.send(`Adam 100 yaşında değil ya?`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} kanalında kullanıldı.`)

message.guild.members.get(kullanıcı.id).setNickname(`${isim} - ${nick} -『${yaş}』`)
message.guild.members.get(kullanıcı.id).addRole(role.id)
message.guild.members.get(kullanıcı.id).removeRole(unregistered.id)
  
channel.send(
emb.setDescription(`${kullanıcı}, kullanıcısı kayıt edildi.`)
.addField(`Kayıt eden:`, message.author, true)
.addField(`Yeni ismi:`, args[1], true)
.addField(`Yeni Nicki:`, args[2], true)
.addField(`Yeni Yaşı:`, args[3], true)
.addField(`Verilen rol:`, role.name, true)
.addField(`Alınan rol:`, unregistered.name, true))
  
message.channel.send(`Başarılı.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Kayıtet'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-et'
};