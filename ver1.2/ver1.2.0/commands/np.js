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
        embed.setDescription(`You must in a voice channel to use **${prefix}np**!`);
        return message.channel.send(embed);
    } 

    if (!client.player.getQueue(message)) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Nothing in queue. Use **${prefix}play** music!`);
        return message.channel.send(embed);
    } 

    const track = await client.player.nowPlaying(message);

    embed.setDescription(`[${track.title}](${track.url})`);
    embed.setTitle(':headphones: Now Playing');
    embed.setThumbnail(track.thumbnail);
    embed.addFields(
        { name: 'Channel', value: `[${track.author}](${track.url})`, inline: true},
        { name: 'Views', value: track.views, inline: true },
        { name: 'Duration', value: track.duration, inline: true },
        { name: 'Requested by', value: track.requestedBy.username },
        { value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
    )
    message.channel.send(embed);
};
