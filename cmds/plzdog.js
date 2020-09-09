const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');


module.exports.run = async (bot,message,args) => {
    message.delete()

    const subReddits = ["dog"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    
    const dog = new MessageEmbed()
    .setColor(0x00bbfa)
    .setImage(img)
    .setTitle('Dein Hund')
    .setURL(`https://reddit.com/r/${random}`)
    .setFooter('Developed by Ocean TH GAMER')

    message.channel.send(dog);
}

module.exports.help = {
    name : 'dog'
}
