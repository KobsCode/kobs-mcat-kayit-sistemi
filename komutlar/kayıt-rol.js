const Discord = require('discord.js')

exports.run = async (client, message, args) => {


    
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Otorol sistemini ayarlamak için yeterli yetkin yok!");
  
  let rol = message.mentions.roles.first();
  
  if(!rol) return message.channel.send('Bir Rol Etiketle')
  
  return message.channel.send(`Başarılı Rolu Bunu Ayarldım ${rol}`) 
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-rol'],
    permLevel: `ueytki`,
}

exports.help = {
    name: 'kayıt-rol-ayarla',
    category: 'moderasyon',
    description: 'Kayıtta Verilecek Rolü Seçersin',
    usage: 'kayıt-rol-ayarla <@rol>'
}
   