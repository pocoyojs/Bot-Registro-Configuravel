const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 

client.login(config.token); 

client.once('ready', async (1205149534683144222) => {

    console.log(`🎈 - ${client.user.tag} Foi iniciada em ${client.guilds.cache.size} servidores!\n👑 - Tendo acesso a ${client.channels.cache.size} canais!\n❣️ - Contendo ${client.users.cache.size} usuarios!` )

})

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
    let activities = [
      `💻 ┃ Victor o Brabo.`,
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
       type: "STREAMING", url: "https://www.twitch.tv/ovitinhoh"
        }), 5000); 
    client.user
        .setStatus("dnd")
  });
