const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setFooter('Thank for using Isme 💙')

module.exports = (client, message, query, tracks) => {
    embed.setTitle(`Results`)
    embed.setDescription(`"**${query}**" searching from Youtube!\nChoose song and send a number of song from **1** to **10**.\n\n` + (tracks.map((track, i) => {
        return `**${i + 1}.    **   [${track.title}](${track.url})`
    }).slice(0, 10).join('\n') ));
    message.channel.send(embed);

};