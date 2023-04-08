const Discord = require("discord.js");

exports.run = async (client, message, args) => {
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
