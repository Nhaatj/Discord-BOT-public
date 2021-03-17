const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')

exports.run = async (client, message) => {
    embed.setDescription(`${client.ws.ping}ms!`);
    message.channel.send(embed)

};
