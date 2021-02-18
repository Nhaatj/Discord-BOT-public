const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')

exports.run = async (client, message, args) => {

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

    if (!args[0] || isNaN(args[0]) || 100 < args[0] || args[0] <= 0) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Please enter a number from **1** to **100** !`);
        return message.channel.send(embed);
    }

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Please enter a number from **1** to **100** !`);
    }

    client.player.setVolume(message, parseInt(args[0]));
    embed.setTitle(':signal_strength: Volume')
    embed.setDescription(`**${args.join(" ")}%**`);
    message.channel.send(embed);
};
