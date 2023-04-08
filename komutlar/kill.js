const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
      .setColor('#FF0000')
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField(':warning: Uyarı :warning:', '`kill` adlı komutu özel mesajlarda kullanamazsın.');
    return message.author.send({ embeds: [ozelmesajuyari] });
  }

  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (!user) return message.reply('Kime ateş edeceğini yazmalısın.').catch(console.error);

  message.channel.send('Kafasına sıkılıyor....')
    .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
    .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
    .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
    .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
    .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
    .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
    .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
    .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
    .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
    .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
    .then(nmsg => nmsg.edit(`${Random[kill]}`));

  const Random = ['Tam isabet', 'Iskaladın tekrar dene.'];
  const kill = Math.floor(Math.random() * Random.length);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['k'],
  permLevel: 0,
  kategori: 'Eğlence'
};

exports.help = {
  name: 'kill',
  description: 'İstediğiniz kişinin kafasına sıkar.',
  usage: '+kill @user'
};
