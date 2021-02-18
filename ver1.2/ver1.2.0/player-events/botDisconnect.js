const { MessageEmbed } = require("discord.js");
const { color } = require("../config/bot.json")

module.exports = (client, message, queue) => {
    let embed = new MessageEmbed()
        .setTitle(`${error} Error`)
        .setDescription(`Music had stoped. And **Isme** has been disconnected. Use **${client.bot.prefix}play** to music.`)
        .setColor(color)
        .setFooter('Thank for using Isme 💙')
    message.channel.send(embed);

};
