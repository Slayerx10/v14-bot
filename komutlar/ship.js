const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (message.channel.id !== '1024717505832423454') return message.reply('**Belirlenen kanal dışında bir yerde bu komutu kullanamazsın!**');

  if (!member) return message.reply('**Ship Oranını Ölçmek İstediğin Kişiyi Etiketlemen Gerekir! :heart:**');
  if (member.user.bot) return message.reply('**Botlarla Yapamazsın, Sakin Ol :D**');
  
  var anasonuc = Math.floor(Math.random() * 101);
  var kalp = '';
  var akalp = '🖤'.repeat(10);
  
  if (Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
    var c = 0;
    for (var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
      kalp += '❤️';
      c++;
    }
    akalp = '🖤'.repeat(10 - c);
  } else {
    var hkalp = '';
    var kalp = '🖤';
    var hkalp = '🖤🖤';
    var gkalp = '🖤🖤🖤';
    var fkalp = '🖤🖤🖤🖤';
    var ekalp = '🖤🖤🖤🖤🖤';
    var dkalp = '🖤🖤🖤🖤🖤🖤';
    var ckalp = '🖤🖤🖤🖤🖤🖤🖤';
    var bkalp = '🖤🖤🖤🖤🖤🖤🖤🖤';
    var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤';
  }
  
  var yorum = 'HOCAM AŞK VAR BURDA';
  
  if (anasonuc < 80) {
    yorum = 'hadi 100 sayalım bari';
  }
  
  if (anasonuc < 60) {
    yorum = 'nefret etmekten iyidir :(';
  }
  
  if (anasonuc < 40) {
    yorum = 'sevmiyor musun..';
  }
  
  if (anasonuc < 20) {
    yorum = 'kaç..';
  }
  
  const embed = new EmbedBuilder()
    .setDescription(`Ship yüzdesi **%${anasonuc}**! \n${kalp}${akalp} \n\n${yorum}`)
    .setColor('#FF0000');
  
  message.channel.send({ embeds: [embed] });
};

exports.conf = {
  aliases: ['Ship', 'ölç', 'olc', 'ship'],
  kategori: "Eğlence"
};

exports.help = {
  name: 'Ship',
  description: "Etiketlediğin kişi ile aranızdaki sevgi oranına bakarsın.",
  usage: "+ölç @user"
};
