const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot,message,args) => {
    message.delete()
    
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];


    const img = await randomPuppy(random);
    
    const meme = new MessageEmbed()
    .setColor(0x00bbfa)
    .setImage(img)
    .setTitle('Dein Meme')
    .setURL(`https://reddit.com/r/${random}`)
    .setFooter('Developed by Ocean TH GAMER')

    message.channel.send(meme);

}

module.exports.help = {
    name : 'meme'
}

