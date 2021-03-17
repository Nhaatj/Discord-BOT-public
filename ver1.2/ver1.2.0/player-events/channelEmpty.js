const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setDescription(':mute: Music stopped! No one in the voice channel !')
    .setFooter('Thank for using Isme 💙')

module.exports = (client, message, queue) => {
    message.channel.send(embed);
};