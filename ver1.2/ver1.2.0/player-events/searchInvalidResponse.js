const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(':octagonal_sign: Error')
    .setFooter('Thank for using Isme 💙')

module.exports = (client, message, query, tracks, content, collector) => {
        
    embed.setDescription(`You must send a valid number between **1** and **10** !`);
    message.channel.send(embed);
};