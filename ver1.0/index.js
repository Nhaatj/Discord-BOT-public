var version = '1.0';

const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = '/';
const fs = require('fs');
const { Server } = require('tls');
const config = require('./config.json')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready' , () => {
    console.log('NhaatjBOT is ready' + version);
    bot.user.setActivity('Sad 😥! /help');
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('724672868960567336').send(`Welcome <@${guildMember.user.id} to my server! <@${Server}>`)
});

client.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) 
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if( command === 'help' || 'h'){
        client.commands.get('help').execute(message, args, Discord);
    }

    if( command === 'linh'){
        client.commands.get('linh').execute(message, args, Discord);
    }
    
    if( command === 'clear' || 'c'){
        client.commands.get('clear').execute(message, args)
    }
    if( command === 'play' || 'p'){
        client.commands.get('play').execute(message, args)
    }
    if( command === 'stop' || 's'){
        client.commands.get('stop').execute(message, args)
    }
    if( command === 'leave' || 'l'){
        client.commands.get('leave').execute(message, args)
    }
});

client.login(config.token)