const { MessageEmbed } = require('discord.js');

// Social Media Embed

module.exports.run = async (bot,message,args) => {
    message.delete();

    const socialmedia = new MessageEmbed()
    .setTitle('Ocean Clan')
    .setColor(0x125DFF)
    .addField('Hier unsere Social Media', ' Insta: https://instagram.com/_team_ocean_?igshid=1gthnsd4q9vj \n \n YouTube: https://www.youtube.com/channel/UCilPwqa1UF3NXS6bDuwHnzg?view_as=subscriber \n \n Twitch: https://twitch.tv/ocean_clan01 \n \n Twitter:  https://twitter.com/TeamOeanFN?s=09 \n \n TikTok: Bald', true)
    .setDescription('Es würde uns freuen wenn du uns supportest indem du uns folgst!')
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
    .setFooter('Developed by Ocean TH GAMER')

    message.channel.send(socialmedia)
}

module.exports.help = {
    name : 'socialmedia'
}