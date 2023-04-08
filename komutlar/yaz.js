const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) return message.channel.send(`Bu komut sadece sunucularda kullanılabilir!`);
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmak için iznin yok!");
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['yaz'],
  permLevel: 0,
  kategori: 'Karma'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: '+yaz [yazdırmak istediğiniz şey]'
};
