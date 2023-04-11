const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => {
  
  if (!message.guild) {
    const ozelmesajuyari = new EmbedBuilder()
      .setColor(0xFF0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.');
    return message.author.send({ embeds: [ozelmesajuyari] });
  }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.cache.find(channel => channel.name === 'test'); // log kanalının adı
  if (!modlog) return message.reply('`test` kanalını bulamıyorum.'); // log kanalının adı
  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);

  if (!guild.members.cache.get(user.id).bannable) return message.reply('Yetkilileri banlayamam.');
  guild.members.ban(user, { reason: reason, days: 2 });
  
  const embed = new EmbedBuilder()
    .setColor(0x00AE86)
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 256 }))
    .addFields(
      { name:  'Eylem:', value: 'Ban' },
      { name: 'Kullanıcı:', value: `${user.username}#${user.discriminator} (${user.id})` },
      { name: 'Yetkili:', value: `${message.author.username}#${message.author.discriminator}` },
      { name: 'Sebep:', value: reason }
    )
  return modlog.send({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
