const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(':octagonal_sign: Error')
    .setFooter('Thank for using Isme 💙')

module.exports = (client, message, query, tracks) => {

    embed.setDescription(`Not available ! Please send the command again !`);
    message.channel.send(embed)
};