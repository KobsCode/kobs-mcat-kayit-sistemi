const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
  let user = message.member;
  let guild = message.guild;
  
  let isim = args[0]
  let yas = args[1]
  
  if (!isim) return message.channel.send(`İsmini girmelisin Dostum.`)
  if (!yas) return message.channel.send(`Yaşını girmelisin.`)
  
  user.setNickname(`${isim} [${yas}]`)
  user.addRole()
  message.channel.send(`${message.author} Sunucuya Kaydoldun Hoşgeldın !`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'kayıtol',
  description: "Sunucuya kaydolmaya Yarar",
  usage: '-kayıt isim yaş'
}
