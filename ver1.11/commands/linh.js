module.exports = {
    name : 'linh',
    description : "My crush",
    async execute(message, args, Discord){
        // message.channel.send('Iam here!');
        const newEmbed = new Discord.MessageEmbed()
        .setColor('2E9BFF')
        .setTitle('Kewtgirl')
        .setURL('') // this is URL's Title
        .setDescription('Linh?')
        .addFields(
            {name: 'She is my crush.', value: "Awwww Linh is so Kewt :heart: :blue_heart: :green_heart: :orange_heart: :white_heart: :yellow_heart:"},
        )
        .setFooter('Thanks for using Nhaatj-BOT 💙 ')
        message.channel.send(newEmbed);
    }
    
}