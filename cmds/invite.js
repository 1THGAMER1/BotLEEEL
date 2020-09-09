

module.exports.run = async (bot,message,args) => {
    message.delete();
    message.channel.send("Mein Einladungs Link: https://discord.com/oauth2/authorize?client_id=711568834590408765&scope=bot&permissions=8.");


}

module.exports.help = {
    name: "invite"
}