const config = require('./config/config.json')
const token = config.token
const prefix = config.prefix
const status = config.status

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client()

//
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// Run bot and set status
client.once('ready' , () => {
    console.log('isme is ready');
    client.user.setActivity(' /help' , {type: `${status}`});
});

// Member join
client.on('guildMemberAdd',guildMember => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Welcome')
        .setColor('2E9BFF')
        .setDescription(`Welcome <@${guildMember.user.id}> to my server :blue_heart:`)
        .setFooter('Thanks for using Isme')

    guildMember.guild.channels.cache.get(config.channel_id).send(embed)
})
// Message command
client.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) 
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Bot commands
    if( command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }

    if( command === 'linh'){
        client.commands.get('linh').execute(message, args, Discord);
    }

    if( command === 'stt'){
        client.commands.get('stt').execute(message, args, Discord);
    }
    
    // music commands
    if( command === 'clear'){
        client.commands.get('clear').execute(message, args, Discord)
    }
    if( command === 'play'|| 'p'){
        client.commands.get('play').execute(message, args, Discord)
    }
    if( command === 'stop'){
        client.commands.get('stop').execute(message, args, Discord)
    }
    if( command === 'leave'){
        client.commands.get('leave').execute(message, args, Discord)
    }
});

client.login(token)