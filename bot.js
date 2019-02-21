const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510168817494654988")
setInterval(function() {
channel.send(`AlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseriAlaseri`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
