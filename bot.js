const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("518430573044432942")
setInterval(function() {
channel.send(`mahmod xd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
