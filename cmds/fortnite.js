const { MessageEmbed } = require("discord.js");
const fortnite = require("simple-fortnite-api"), client = new fortnite("658b23d1-9b46-4976-856d-71120b2b5049");

module.exports.run = async (bot, message, args) => {

        if(args[0] && ["lifetime", "solo", "duo", "squad",].includes(args[1])) return message.channel.send("Usage: `ocean!stats <gametype> <username>` \n GameTypes: Lifetime, Solo, Duo, Squad");
        let gametype = args[0] ? args[0].toLowerCase() : "lifetime";
        if(!args[1]) return message.channel.send("Bitte gebe einen Benutzernamen an.");

        let data = await client.find(args[1])
        if(data && data.code === 404) return message.channel.send("Name wurde nicht gefunden. (Zurzeit ist es möglich das Namen mit Leerzeichen nicht funktionieren)")
            const { image, url, username } = data;
            const { winPercent, kills, score, wins, kd, matches } = data[gametype]

                const embed = new MessageEmbed()
                    .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
                    .setThumbnail('https://cdn.discordapp.com/attachments/731097656646041637/732241559046848629/20200712_210326.jpg')
                    .setDescription(`**Gamemode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **Kills:** ${kills || 1}
                    **Score:** ${score || 1}
                    **Siege:** ${wins || 1}
                    **Sieges Wahrscheinlichkeit:** ${winPercent || "0%"}
                    **Kill / Tod:** ${kd || 1}
                    **Gespielte matches:** ${matches || 1}
                    **Link:** [link to profile](${url})`)
                    .setTimestamp()

                    message.channel.send(embed);
    }
                                  


module.exports.help = {
    name: 'stats'
}