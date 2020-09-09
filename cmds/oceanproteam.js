const { MessageEmbed } = require('discord.js');


// Anforderungen Pro Team

module.exports.run = async (bot,message,args) => {
    message.delete();

    const proteam = new MessageEmbed()
    .setTitle('OCEAN PRO TEAM')
    .setColor(0x125DFF)
    .addField('Um in unserem Pro Team zu kommen musst du folgendes tun:', '1. Bewerbungen für das Pro Team und der Academy oder Talents, bitte per Direktnachricht an einem Pro-Team-Manager. \n \n 2. Der Pro Team Manager wird dich über deinen aktuellen Arena Punktestand, Placements und Earnings abfragen. \n \n 3. Hab Beweise (z.b. Screenshots) zur Hand,die du vorlegen kannst, bevor du einen Pro-Team-Manager kontaktierst. \n \n 4. Folge den weiteren Anweisungen des Ocean-Pro-Team-Managers!', true)
    .setThumbnail('https://cdn.discordapp.com/attachments/730948104307867679/752123567340126319/20200906_131017.gif')
    .setFooter('Developed by Ocean TH GAMER')
    message.channel.send(proteam);

    const proteam2 = new MessageEmbed()
    .setTitle('Anforderungen')
    .setColor(0x125DFF)
    .addField('Die Voraussetzungen für das pro Team sind:', 'Arena Punkte: 6000; Platzierungen: Top 1% \n (ca. 4 mal im Monat) \n \n **Die Voraussetzungen für die Academy sind:**  Arena Punkte: 5500; Platzierungen: Top 10% \n (ca. 3 mal im Monat) \n \n **Die Voraussetzungen für die Talents sind:** Arena Punkte: 4500; Platzierungen: Top 15% \n (ca. 2 mal im Monat)', true)
    .setFooter('Freiwilliger Clantag: Ocean NAME')
    message.channel.send(proteam2);
}

module.exports.help = {
    name : 'proteam'
}