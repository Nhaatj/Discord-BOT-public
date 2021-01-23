const config = require('../config/config.json')
const prefix = config.prefix

module.exports = {
    name : 'stop',
    description : "stop the bot and leave the channel",
    execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        //check member on viocechannel
        const embed = new Discord.MessageEmbed() 
            .setTitle('Error')
            .setColor('2E9BFF')
            .setDescription('You need to be in a voice channel to **stop** bot!')
            .setFooter('Thanks for using isme')

        if(!voiceChannel) 
            return message.channel.send(embed);

        // stop code
        const embed_stop = new Discord.MessageEmbed() 
            .setTitle(':no_entry: Stop')
            .setColor('2E9BFF')
            .setDescription(`Isme_BOT **stop** now. If you wanna **${prefix}play** a song type **${prefix}play** + song name.`)
            .setFooter('Thanks for using isme')

        message.channel.send(embed_stop)
                        voiceChannel.leave();
    }
}