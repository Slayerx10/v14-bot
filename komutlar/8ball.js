const Discord  = require('discord.js');
exports.run = async (client, message, args) => {

const soru = args.join(' ')
if (soru.length < 1) return message.reply('Cevaplamam için herhangi bir şey yazmalısın.');

let answers = [
'Kesinlikle evet.',
'Kesinlikle hayır.',
'Sen bilirsin.',
'Belki.',
'Olumlu görünüyor.',
`Olumlu görünmüyor.`,
`Bunu beğendim.`,
`Bunu beğenmedim.`,
`Tekrar sor.`,
`Bence hayır.`,
`Bence evet.`,
`Bilmiyorum.`,
`Belki.`,
`Karnım aç düşünemiyorum.`,
] 

const BallNumber = Math.floor(Math.random() * answers.length); 

const discord = new Discord.EmbedBuilder()
.setTitle(`${message.author.tag} || 8Ball`)
.setDescription(`**Soru :** \n  \`${soru}\` \n **Yanıtım :** \n \`${answers[BallNumber]}\``)
.setColor("White")
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
message.channel.send({embeds : [discord]})

}
exports.conf = {
aliases: ['tahminet', 'tahmin', '8', 'ball'],
permLevel: 0,
kategori: "Eğlence"
}

exports.help = {
name: '8ball',
description: '8ball sorularınıza cevap verir. (Geliştiriliyor..)',
usage: "+ball"
}
