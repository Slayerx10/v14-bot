const { MessageEmbed } = require("discord.js");
const moment = require("moment");
require('moment-duration-format');

exports.run = async (client, message, args) => {
  if (message.channel.type == "DM") return;
  if (message.channel.type !== "GUILD_TEXT") return;

  const user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  const member = message.guild.members.cache.get(user.id);

  moment.locale('tr-TR');

  function checkDays(date) {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " gün" : " gün") + " önce";
  }

  if (!member) return message.reply('Bir kullanıcı belirt +kb @user veya +kb <user_ID> ')

  const roles = member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
  const userRoles = roles.length > 1 ? roles.slice(1).join(' | ') : 'Bulunmuyor';

  const embed = new MessageEmbed()
    .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }) || user.defaultAvatarURL())
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
    .addField('Üye Bilgisi:', `**Sunucudaki İsmi:** ${member.displayName}\n**Sunucuya Katılım Tarihi:** ${moment.utc(member.joinedAt).format('Do MMMM YYYY')} - ${checkDays(member.joinedAt)} \n**Rolleri:** ${userRoles}`, false)
    .addField('Kullanıcı Bilgisi:', `\n**Kullanıcı Adı**: ${user.tag}\n**ID:** ${user.id}\n**Hesabın Kuruluş Tarihi**: ${moment.utc(user.createdAt).format('Do MMMM YYYY')} - ${checkDays(user.createdAt)}`, false)
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp();
    
  return message.channel.send({ embeds: [embed] });
};

exports.conf = {
  aliases: ['profilim', 'kullanıcıbilgi', 'profil', 'kullanıcı bilgi', 'kb', 'bilgi'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'Kullanıcı hakkında bilgi verir. (Yapılıyor..)',
  usage: '+kb veya +kb @user'
};
