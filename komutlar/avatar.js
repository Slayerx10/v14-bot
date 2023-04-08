const { EmbedBuilder } = require('discord.js');

exports.run = (client, message, args) => {
    let kullanıcı = message.mentions.members.first();
    if (kullanıcı) {
        const embed = new EmbedBuilder()
            .setDescription(`${kullanıcı} Kişisinin Profil Resmi`)
            .setColor('#FF0000')
            .setImage(kullanıcı.user.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    } else {
        const embed = new EmbedBuilder()
            .setDescription(`${message.author} Profil Resmin`)
            .setColor('#FF0000')
            .setImage(message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['Avatar', 'AVATAR', 'pp', 'Pp', 'PP', 'İCON', 'icon', 'İcon', 'aVATAR', 'avatra', 'Avatra', 'AVATRA', 'avtra', 'AVTRA', 'Avtra'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: 'avatar',
    description: "Etiketlediğiniz kullanıcın profilini görüntülersiniz.",
    usage: "+pp veya +pp @user"
};
