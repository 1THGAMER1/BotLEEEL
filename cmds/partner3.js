const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const partner3 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ TEAM KODYX ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@488664221513678848> \n ◆ Discord: https://discord.gg/8vb4Rr3')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
.setFooter('Developed by Ocean TH GAMER')

message.channel.send(partner3)

}

module.exports.help = {
    name : 'partner3'
}