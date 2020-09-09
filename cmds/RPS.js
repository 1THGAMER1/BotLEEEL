const { MessageEmbed } = require("discord.js");
const { promptMessage } = require('././../functions');

const chooseArr = ['🗻', '🗞', '✂'];




module.exports.run = async (bot,message,args) => {
    const embed = new MessageEmbed()
    .setColor(0x2BFF9)
    .setFooter(message.guild.me.displayName, bot.user.displayName)
    .setDescription('Klicke ein Emoji an um zu spielen!')
    .setTimestamp();
    
    const m = await message.channel.send(embed);
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice);
    await m.reactions.removeAll();

    embed
        .setDescription('')
        .addField(result, `${reacted} vs ${botChoice}`);


        m.edit(embed);



    function getResult(me, botChosen) {
        if ((me === '🗻' && botChosen === '✂' ) || 
            (me === '🗞' && botChosen === '🗻') ||
            (me === '✂' && botChosen === '🗞')) {
                return 'Gewonnen!';
            } else if ( me === botChosen) {
                return "Gleichstand!";
            } else {
                return "Verloren!"; 
            }
    }
}

module.exports.help = {
    name : "rps"
}