const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(':headphones: Now Playing')
    .setFooter('Thank for using Isme 💙')

module.exports = (client, message, track) => {
    embed.setDescription(`[${track.title}](${track.url})`);
    message.channel.send(embed);
};