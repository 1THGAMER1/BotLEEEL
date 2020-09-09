

module.exports.run = async (bot,message,args) => {
    message.delete()
    message.channel.send("Bot befindet sich in Version 0.7 \n\n **Neues bei dieser Version:** \n In #ocean-roster und #ocean-partner sind die Texte nicht mehr vom Management sondern vom Bot, damit es schöner aussieht! \n \n **Überarbeitet:** Alle Commands wo das Ocean Logo war wurden mit dem neuen Logo erneuert");
}

module.exports.help = {

    name: "version"
}