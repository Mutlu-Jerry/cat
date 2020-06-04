const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: codare Ready.js`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: $codare`);
  client.user.setStatus("https://www.twitch.com/codare");
  client.user.setActivity(`c!yardım | Sunucu ${client.users.size} Kişi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};
 