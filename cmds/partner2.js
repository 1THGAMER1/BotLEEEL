const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
message.delete()

const partner2 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ Team Quarter ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@700332737885765632> \n ◆ Discord: https://discord.gg/nvx9kmw')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
.setFooter('Developed by Ocean TH GAMER')

message.channel.send(partner2)

}

module.exports.help = {
    name : 'partner2'
}