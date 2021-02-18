const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const player = new Player(client);
client.player = player;
client.config = require('./config/bot.json');
client.commands = new discord.Collection();
const channel_id = require('./config/bot.json').channel_id;

// Member join
client.on('guildMemberAdd',guildMember => {
    let role = guildMember.guild.roles.cache.find(role => role.id === '800614034130599936');
    guildMember.roles.add(role);

    const embed = new discord.MessageEmbed()
        .setTitle('Welcome')
        .setColor('2E9BFF')
        .setDescription(`Welcome <@${guildMember.user.id}> to my server :blue_heart:`)
        .setFooter('Thanks for using Isme')

    guildMember.guild.channels.cache.get(channel_id).send(embed);
})


fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./player-events/${file}`);
        let eventName = file.split(".")[0];
        client.player.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

client.login(client.config.token_bot);
