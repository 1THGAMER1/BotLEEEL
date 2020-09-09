
module.exports.run = async (bot,message,args) => {
    message.delete()

    message.channel.send('Du willst das ich ein Embed extra für dich erstelle? Dann schreibe jetzt Ocean TH GAMER #4958 an. Ich werde dir dann je nach Anfrage schnellstmöglich KOSTENLOS ein Embed für DEIN Server erstellen!')
}

module.exports.help = {
    name : 'embed'
}