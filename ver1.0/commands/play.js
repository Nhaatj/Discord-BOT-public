const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'play music',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel && command === 'play' ) return message.channel.send('You need to be in a channel to use **/play** command :smiling_face_with_tear:');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        // if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        // if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
        // if (!args.length) return message.channel.send('You need to send the second argument :smiling_face_with_tear:');

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
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                // voiceChannel.leave();
                message.channel.send('Stop playing, **type** */p* or */play* and listening music');
            });
 
            await message.channel.send(`:headphones: Now Playing **${video.title}**`)
 
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
                // voiceChannel.leave();
                message.channel.send('Stop playing, **type** */p* or */play* and listening music');
            });
 
            await message.channel.send(`:headphones: Now Playing **${video.title}**`)
        } else {
            message.channel.send('No video results found :smiling_face_with_tear: ');
        }
    }
}