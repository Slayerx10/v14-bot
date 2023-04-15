const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { Snake } = require('discord-gamecord');

exports.run = async (client, message, args) => {
  new Snake({
        message: message,
        embed: {
          title: 'Yılan oyunu',
          color: '#00FFFF',
          OverTitle: "Oyun bitti.",
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'Butonları kullanmak için oyunu sen başlatmalısın.',
      }).startGame();
  },

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['snake', 'yılan', 'y'],
  permLevel: 0,
  kategori: 'Eğlence'
};

exports.help = {
  name: 'Snake',
  description: 'Yılan oyunu oynarınız. (Geliştiriliyor..)',
  usage: '-snake'
}
