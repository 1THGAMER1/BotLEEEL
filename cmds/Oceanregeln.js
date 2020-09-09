const { MessageEmbed } = require('discord.js');



module.exports.run = async (bot,message,args) => {
    message.delete();

    const regeln = new MessageEmbed()
    .setTitle('Regeln')
    .setColor(0x125DFF)
    .addField('OCEAN CLAN', '🚫 Beleidigung jeglicher Art ist untersagt. \n \n 🚫 Werbung für Clans etc. Ist verboten. \n \n 🚫Sonstige Werbung ist nur in #eigenwerbung erlaubt \n \n 🚫 Sämtliche Werbung und Spam ist untersagt.  \n \n 🚫 Sämtlicher Handel (Accounts, Guthabenkarten etc.) und Betteln (Skins, V-Bucks etc.) ist auf diesen Server untersagt. \n \n 🚫 Jugendgefährdende Themen sind aufgrund des hohen Anteils an Minderjährigen auf diesem Server verboten.', true)
    .setDescription('Gut  durchlesen')
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
    .setFooter('Develeoped by Ocean TH GAMER')

    message.channel.send(regeln)
}


module.exports.help = {
    name : 'regeln'
}