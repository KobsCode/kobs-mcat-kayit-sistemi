const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const codemarefi= new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Kobs`, client.user.avatarURL) 
      .setDescription('**[Youtube](https://youtube.com/ogünsertkobs)**')
      .addField('** Komutlar (3)**', '`kayıtkanal`, `kayıt-rol-ayarla`, `kayıtsistemi`')
    .setFooter(``, client.user.avatarURL)
    message.channel.send(codemarefi).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım Menüsü',
      description: 'bilgi',
};