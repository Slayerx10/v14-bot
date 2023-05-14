const { Client, GatewayIntentBits, Partials } = require("discord.js");
const ayarlar = require("./ayarlar.json");

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

// Yaz'da silinen mesajlar

client.setMaxListeners(); // max dinleme sınırı
client.on('messageDelete', message => {
  if (!message.content || !message.content.startsWith('+yaz')) return; // Sadece +yaz ile başlayan mesajları işle
  
  const fs = require('fs');
  const deletedMessage = {
    content: message.content,
    author: message.author.id,
    channel: message.channel.id
  };
  
  const fileData = fs.readFileSync('messageStorage.json');
  const jsonData = JSON.parse(fileData);
  
  jsonData[message.id] = deletedMessage;
  
  fs.writeFile('storage.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) console.log(err);
    else console.log(`Silinen mesaj depolandı: "${message.content}"`);
  });
});



// Yaz'da silinen mesajlar

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

client.login(process.env.TOKEN || ayarlar.token)
