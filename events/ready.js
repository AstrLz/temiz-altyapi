const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity("bit.ly/sparklees", { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(``);

};

// Status
// online - Çevrimiçi
// idle - Boşta
// dnd - Rahatsız Etmeyin

// Type
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR
