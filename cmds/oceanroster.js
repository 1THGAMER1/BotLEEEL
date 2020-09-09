const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete()

    const oceanroster = new MessageEmbed()
    .setTitle('Ocean Roster')
    .setColor(0x125DFF)
    .addField('⬜⬜⬜⬜⬜⬜⬜ Management ⬜⬜⬜⬜⬜⬜⬜', '<@&728856232953118760> \n <@630018403570155521>  \n \n <@&734153281189838967> \n <@533366264312365056> \n  <@400658261512159232>\n \n <@&727621609359278080> \n <@400658261512159232> \n <@411886123950800896> \n \n <@&731226637852737556> \n <@679332454041124894> \n \n <@&730859863273635940> \n <@591262163562397717> \n <@640333310010064896> \n \n <@&731061690166149161> \n <@591262163562397717> \n \n <@&730881791732219956> \n <@640333310010064896> \n <@533366264312365056>', true )
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
    .setFooter('Developed by Ocean TH GAMER')
    
    message.channel.send(oceanroster)

}

module.exports.help = {
    name : 'roster'
}