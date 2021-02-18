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
        embed.setDescription(`You must in a voice channel to use **${prefix}loop**!`);
        return message.channel.send(embed);
    };
        

    if (!client.player.getQueue(message)) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Nothing in queue. Use **${prefix}play** music!`);
        return message.channel.send(embed);
    };
       

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        embed.setTitle(':repeat: Loop');
        embed.setDescription('Disabled!');
        client.player.setRepeatMode(message, false);
        return message.channel.send(embed);
    } else {
        embed.setTitle(':repeat: Loop');
        embed.setDescription('Enabled!');
        client.player.setRepeatMode(message, true);
        return message.channel.send(embed);
    };

};
