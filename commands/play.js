const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const prefix = require('../config/config.json').prefix

module.exports = {
    name: 'play',
    description: 'play music',
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;
        
        //check member on viocechannel
        const embed = new Discord.MessageEmbed() 
            .setTitle('Error')
            .setColor('2E9BFF')
            .setDescription('You need to be in a voice channel to **play** music!')
            .setFooter('Thanks for using isme')
        if (!voiceChannel) 
            if (command === 'play' || 'p')
                return message.channel.send(embed);

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
            
            // embed finish
            const embed_finish = new Discord.MessageEmbed() 
                .setTitle('Finish')
                .setColor('2E9BFF')
                .setDescription(`Music had finished. You need type **${prefix}play** to play music!`)
                .setFooter('Thanks for using isme')

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                message.channel.send(embed_finish);
            });
            //embed now playing
            const embed_play = new Discord.MessageEmbed() 
                .setTitle(':headphones: Now Playing')
                .setColor('2E9BFF')
                .setDescription(`${args}`)
                .setFooter('Thanks for using isme')
            await message.channel.send(embed_play)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                // embed finish
                const embed_finish = new Discord.MessageEmbed() 
                    .setTitle('Finish')
                    .setColor('2E9BFF')
                    .setDescription(`Music had finished. You need type **${prefix}play** to play music!`)
                    .setFooter('Thanks for using isme')
                message.channel.send(embed_finish);
            });
            //embed now playing
            const embed_play = new Discord.MessageEmbed() 
                .setTitle(':headphones: Now Playing')
                .setColor('2E9BFF')
                .setDescription(`${video.title}`)
                .setFooter('Thanks for using isme')

            await message.channel.send(embed_play)
        } else {
            //embed no result
            const embed_noresult = new Discord.MessageEmbed() 
                .setTitle('Error')
                .setColor('2E9BFF')
                .setDescription(`No video results found`)
                .setFooter('Thanks for using isme')
            message.channel.send(embed_noresult);
        }
    }
}