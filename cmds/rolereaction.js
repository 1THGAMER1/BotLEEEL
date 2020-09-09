const { MessageEmbed, ReactionEmoji } = require('discord.js');

module.exports.run = async (bot,message,args) => {

bot.on('ready', () => {
    console.log('Test');
});

bot.on('message', message => {
    if(message.author.bot)
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === 'Server Rollen');
            if(embedMsg)
            {
                embedMsg.Msg.react('684775458386346014')
                .then(reaction => console.log('Reacted with' + reaction.emoji.name))
                .catch(err => console.error);
            }
        }
        return;
    }
});
    {
    const reaction = new MessageEmbed()
    .setTitle('Server Rollen')
    .setColor(0x125DFF)
    .setDescription('<:ClashRoyale:684775458386346014> -Clash Royale \n \n \n' +
    '<:BrawlStars:684775861462761522> -Brawl Stars \n \n \n' +
    '<:Fortnite:717050380915310612> -Fortnite \n \n \n ');
    message.channel.send(reaction)
    }
}

module,exports.help = {
    name : 'reaction'
}