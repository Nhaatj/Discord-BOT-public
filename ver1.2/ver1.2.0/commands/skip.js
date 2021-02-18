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
        embed.setDescription(`You must in a voice channel to use **${prefix}skip**!`);
        return message.channel.send(embed);
    };
        

    if (!client.player.getQueue(message)) {
        embed.setTitle(':octagonal_sign: Error');
        embed.setDescription(`Nothing in queue. Use **${prefix}play** music!`);
        return message.channel.send(embed);
    };
    client.player.skip(message);
    embed.setTitle(':track_next: Skip!');
    message.channel.send(embed);

};
