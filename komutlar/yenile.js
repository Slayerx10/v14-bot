const Discord = require("discord.js");

exports.run = async (client, message, args) => {
        let embed = new Discord.EmbedBuilder()
        .setTitle("Reload")
        .setDescription("Bu komutu sadece sahibim kullanabilir..")
        .setColor("#cdf785");
        if(message.author.id !== 'idniz') return message.channel.send(embed);
        const filter = response => {
          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
        
        if(!args[0]) return message.channel.send("Bir komut ismi gir!")

        let komutİsim = args[0].toLowerCase()

        try {
          
          delete require.cache[require.resolve(`./${komutİsim}.js`)]
          const pull = require(`./${komutİsim}.js`)
          client.commands.set(pull.help.name, pull)
          message.channel.send(`Yeniden Başlatıldı: \`${komutİsim}\``)
        }

        catch (e) {
          console.log(e)
          return message.channel.send(`Komut Yeniden Yüklenemedi: ${komutİsim} \n${e}`)
        }


      }


exports.conf = {
    aliases: ['komutyenile','yenile','reload', 'y'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "yenile",
    description: "Belirttiğiniz komutu yeniden başlatır.",
    usage: "+yenile"
};




