const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(':octagonal_sign: Error')
    .setFooter('Thank for using Isme 💙')
module.exports = (client, message, query) => {

    embed.setDescription(`No results found on YouTube for **${query}** !`);
    message.channel.send(embed);
};