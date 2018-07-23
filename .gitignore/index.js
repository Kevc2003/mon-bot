const Discord = require ('discord.js');

const bot = new Discord.Client ();
const prefix = "/";


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[/help]'}});
    console.log("Bot Prêt !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.send("pong :joy:");
        console.log('ping pong');
    }
    
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#F3009A')
        .addField("Commandes du Bot", " -/help pour afficher les commandes \n-/ping  :wink: \n-/infos Pour les infos du serveur")
        message.channel.send(help_embed);
        console.log("help Demandé")
    }

    if (message.content === prefix + "infos"){
        var help_embed = new Discord.RichEmbed()
        .setDescription("Infos du serveur")
        .addField("Nom du discord", message.guild.name)
        .addField("crée le", message.guild.createdAt)
        .addField("Tu a rejoin le", message.member.joinedAt)
        .addField("Utilisateur sur le Discord", message.guild.memberCount)  
        .setColor("#F3009A") 
    message.channel.send(help_embed)
    }

    });

    bot.on('guildMemberAdd', member => {
        member.guild.channels.get("471041340587900939").send(":tada:Bonjour <@!" + member.id + "> et bienvenue sur **Aliria**, ammuse toi bien !:wink: ");
        console.log("Bienvenue " + member.user.username)
    });
       
    bot.on('guildMemberAdd', member => {
        var role = member.guild.roles.find('name', 'Membres');
        member.addRole(role)
    })
