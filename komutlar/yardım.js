const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//GENEL KOMUTU
  
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.EmbedBuilder()
              .setAuthor({ name: 'Genel', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/gazi' })
              .setColor('#2667FF')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Genel]});
         
       
       return;
    }
  
//EĞLENCE KOMUTU
  
  if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
   let Eğlence = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Eğlence', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/gazi' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Eğlence').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Eğlence]});
  
      
           return;
  }
  
  //MODERASYON KOMUTU
  
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "Mod" || args[0] === "mod") {
   let Moderasyon = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Moderasyon', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/gazi' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasyon').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
       return message.channel.send({embeds : [Moderasyon]});
             
       
               return;
  }

  //SAHİP KOMUTU
  
    if(args[0] === "Sahip" || args[0] === "sahip" || args[0] === "Owner" || args[0] === "owner") {
   let Sahip = new Discord.EmbedBuilder()
   .setAuthor({ name: 'Sahip', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/gazi' })
   .setColor('#2667FF')
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
       return message.channel.send({embeds : [Sahip]});
             
       
               return;
  }
  
//YARDIM KOMUTU
  
  let embed = new Discord.EmbedBuilder()
  .setAuthor({ name: 'Yardım', iconURL: `${message.author.displayAvatarURL()}`, url: 'https://discord.gg/gazi' })
  .setColor('#FFFB05')
  .setDescription(`**Örnek Kullanım:** \`${prefix}yardım Genel\` \n **Örnek:** \`${prefix}yardım fun\``)
	.addFields(
		{ name: `${prefix}yardım Genel`, value: 'Genel komutlar', inline: false },
		{ name: `${prefix}yardım Eğlence`, value: 'Eğlence komutları', inline: false },
    { name: `${prefix}yardım Moderasyon`, value: 'Moderasyon komutları', inline: false },
		{ name: `${prefix}yardım Sahip`, value: 'Sahip komutları', inline: false },

	)

  .setFooter({ text: `Bu komutu kullanan kullanıcı ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

  return message.channel.send({embeds : [embed]});

  
}
    
  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'], 
    permLevel: 0, 
    kategori: "Genel" 

  };

  exports.help = {
    name: 'yardım',  
    description: 'Komutlar hakkında bilgi verir.', 
    usage: 'yardım', 
  };

