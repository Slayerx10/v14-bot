const Discord = require('discord.js');
const burc = require('burc.js');
const { EmbedBuilder } = require('discord.js');
const { Permissions, permissions } = require('discord.js');

exports.run = async (client, message, args, db) => {
  
  if (!args[0]) return message.reply("Günlük burç yorumu alabilmek için bir burç ismi girmelisin.")
  
let msg = await message.channel.send("Lütfen bekleyiniz veriler çekiliyor..")
let burcumuz = await burc.gunluk(args[0])
if (!burcumuz) return message.channel.send("Bu burç için bir yorum bulunamadı.")
  
let embed = new EmbedBuilder()
 .setAuthor({ name: args[0].toUpperCase() + " " + 'Günlük Burç Yorumu' })
 .setDescription(burcumuz)
 .setFooter({ text: message.author.username+"#"+message.author.discriminator+" tarafından istendi."})
 .setTimestamp()
 .setThumbnail('https://cdn.discordapp.com/attachments/769867372034261033/773181178965393438/1604411151258.png%22')
 .setColor("#FEE75C")
await msg.delete();
message.channel.send({ embeds: [embed] });
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['burç', 'burc'],
  permLevel: 2,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'Burç-Yorum',
  description: 'Günlük değişen burç yorumları alırsınız. (Geliştiriliyor..)',
  usage: '+burc "burç_adı"'
};
