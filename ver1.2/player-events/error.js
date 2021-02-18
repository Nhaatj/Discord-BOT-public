const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')

module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            embed.setDescription(`Nothing in queue. Use **${prefix}play** music!`);
            message.channel.send(embed);
            break;
        case 'NotConnected':
            embed.setDescription(`You must in a voice channel to use **commands**!`);
            message.channel.send(embed);
            break;
        case 'UnableToJoin':
            embed.setDescription(`Isme isn't able to join your voice channel, please check my permissions !`);
            message.channel.send(embed);
            break;
        default:
            embed.setDescription(`Something went wrong ... Please use **${prefix}help** and report for me on Social!`);
            message.channel.send(embed);
    };
    
};
