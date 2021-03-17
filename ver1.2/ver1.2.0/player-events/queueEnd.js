const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')

module.exports = (client, message, queue) => {
    embed.setDescription(`Music stopped! Nothing in the queue ! Use **${prefix}play** music !`);
    message.channel.send(embed);
};