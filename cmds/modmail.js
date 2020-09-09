const { Message, MessageEmbed } = require("discord.js");

module.exports.run = async(bot,message,args) => {

    bot.on('message', (message) => {
        if(message.author.bot) {
            return;
        }

        var msg = message.content;
        var A = message.author.username;
        var D = message.author.discriminator;

        const embed = new MessageEmbed()
        .setTitle(A)
        .setDescription(msg)
        .setFooter(A + '#' + D)
        .setTimestamp()


        if (message.channel.type == 'dm') {
            bot.user.fetch('400658261512159232').then(user => user.send(embed).catch(err => console.log(err)))
        }
    })
    
}

module.exports.help = {
    name : 'test'
}