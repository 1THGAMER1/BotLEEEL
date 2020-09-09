
module.exports.run = async (bot,message,args) => {

    let rNumber = Math.floor((Math.random() *1) +1);
    message.channel.send("Das sind die neusten Leaks! (Update 13.40) ", {files: [`./leakimages/${rNumber}.png`] });


}

module.exports.help = {
    name : "leaks"
}