const FortniteAPI = require("fortnite-api-com");
const config = {
  apikey: "39ffe41db918bb8ba98a45eb702fc4ac179267a8",
  language: "de"
};
 
var Fortnite = new FortniteAPI(config);



module.exports.run = async (bot, message, args) => {
    Fortnite.Shop()
    .then(res => {
        message.channel.send(res);
    }).catch(err => {
        message.channel.send(err);
    });





    const embed = new MessageEmbed()
    .setAuthor('This is a test')
    .setDescription(`**Vorgestellt:** ${Vorgestellt || 0}
    **Täglich:** ${Täglich || 0}
    **Sonderangebote:** ${Sonderangebote || 0}`)
    .setTimestamp()


    message.channel.send(embed);
}



module.exports.help = {
    name: 'lmao'
}