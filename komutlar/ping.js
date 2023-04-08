const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanmak için iznin yok!");

  const ping = new Discord.EmbedBuilder()
.setDescription(`Gecikme sürem → ${client.ws.ping} ms`)
.setColor(Discord.Colors.Black)
 message.channel.send({ embeds: [ping] })
     }

exports.conf = {
  aliases: ['ping', 'ms', 'p'],
  permLevel: 1,
  kategori: "Moderasyon"
};

exports.help = {
  name: "ping",
  description: "Botun gecikme süresine bakarsınız.",
  usage: "+ping"
}
