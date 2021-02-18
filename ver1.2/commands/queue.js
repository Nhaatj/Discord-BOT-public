const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')

exports.run = async (client, message) => {

    if (!message.member.voice.channel) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`You must in a voice channel to use **${prefix}queue**!`);
        return message.channel.send(embed);
    };

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Nothing in queue. Use **${prefix}play** music!`);
        return message.channel.send(embed);
    };
    
    embed.setDescription(`**Now playing** : \n[${queue.playing.title}](${queue.playing.url})\n\n` + (queue.tracks.map((track, i) => {
        return `**${i + 1}.**   [${track.title}](${track.url})`
    }).slice(0, 10).join('\n') + `\n\n${queue.tracks.length > 10 ? `And **${queue.tracks.length - 10}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));
    embed.setTitle(':notes: Queue');
            
    message.channel.send(embed)
};
