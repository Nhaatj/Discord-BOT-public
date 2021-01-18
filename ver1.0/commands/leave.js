module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music :smiling_face_with_tear:");
        await voiceChannel.leave();
        await message.channel.send('Stop playing and leaving channel, **type** */p* or */play* and listening music :smiling_face_with_tear:')
 
    }
}