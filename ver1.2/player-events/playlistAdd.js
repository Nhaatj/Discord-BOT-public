const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')
module.exports = (client, message, playlist) => {

    embed.setDescription(`Playlist has been added to the queue !`);
    message.channel.send(embed);
};