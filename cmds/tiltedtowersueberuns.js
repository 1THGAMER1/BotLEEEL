const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot,message,args) => {
    message.delete();

    const talon = new MessageEmbed()
    .setTitle('Tilted Towers by Talon')
    .setColor(0x125DFF)
    .addField('Dieser Server soll ein Ort sein wo es ausschließlich um das Game Fortnite geht.', 'Tilted Towers ist **KEIN** Clan \n \n Tilted Towers ist ein Treffpunkt für alle Fortnite Gamer. \n Es ist egal ob du im Mickey Mouse Club bist oder im Tiergarten Clan. \n \n Hast du keine Lust auf ein Clan oder brauchst ein wenig Abstand vom Clanalltag? Dann bist du bei Tilted Towers genau richtig', true)
    .setThumbnail('https://cdn.discordapp.com/attachments/710808144980344894/733628347107639367/Fortnite_6-0b581346-b6dd-442a-b885-34baba953251.jpg')
    message.channel.send(talon);
}

module.exports.help = {
    name : 'serverinfo'
}