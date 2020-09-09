const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot,message,args) => {
message.delete()

const partner1 = new MessageEmbed()
.setTitle('Team Ocean Partnerschaft')
.setColor(0x125DFF)
.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n ◥◣◆◢◤ w-key Esport ◥◣◆◢◤ \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', ' ◆ Ansprechsperson: <@698896761854623826> \n ◆ Discord: https://discord.gg/cGgu7TD')
.setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
.setFooter('Developed by Ocean TH GAMER')

message.channel.send(partner1)

}

module.exports.help = {
    name: 'partner1'
}