module.exports = {
    name: 'stop',
    description: 'stop music',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a channel to use **/stop** command :smiling_face_with_tear:');
        await voiceChannel.leave();
        await message.channel.send('Stop playing now, if u wanna **type** */p* or */play* and listening music :smiling_face_with_tear:')
    }
}