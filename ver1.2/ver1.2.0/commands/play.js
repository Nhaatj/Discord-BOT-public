const { MessageEmbed } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;

const embed = new MessageEmbed()
    .setColor(color)
    .setTitle(':octagonal_sign: Error')
    .setFooter('Thank for using Isme 💙')

exports.run = async (client, message, args) => {
    
    if (!message.member.voice.channel) {
        embed.setDescription(`You must in a voice channel to use **${prefix}play**!`);
        return message.channel.send(embed);
    }

    if (!args[0]) {
        embed.setDescription(`You must give me name of the song!`);
        return message.channel.send(embed);
    }

    client.player.play(message, args.join(" "));

};
