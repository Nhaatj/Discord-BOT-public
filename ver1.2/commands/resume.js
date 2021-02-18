const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(':octagonal_sign: Error')
    .setFooter('Thank for using Isme 💙')

exports.run = async (client, message) => {

    if (!message.member.voice.channel) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`You must in a voice channel to use **${prefix}resume**!`);
        return message.channel.send(embed);
    };

    if (!client.player.getQueue(message)) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Nothing in queue. Use **${prefix}play** music!`);
        return message.channel.send(embed);
    };

    client.player.resume(message);

    embed.setTitle(':pause_button: Resume');
    embed.setDescription(`[${client.player.getQueue(message).playing.title}](${client.player.getQueue(message).playing.url})\n resumed !`)
    message.channel.send(embed)

};
