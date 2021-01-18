module.exports = {
    name : 'help',
    description : "Help",
    execute(message, args, Discord){
        // message.channel.send('Iam here!');
        const newEmbed = new Discord.MessageEmbed()
        .setColor('2E9BFF')
        .setTitle('Can i help u ?')
        .setURL('') // this is URL's Title
        .setDescription('These are all NhaatjBot`infomations :blue_heart: ')
        .addFields(
            {name: 'Who is Nhaatj?', value: "Nhaatj is DiscordBot. \nHe was created by Nguyen Duc Nhat.\n "},
        
            {name: 'What can Nhaatj do?', value: "Nhaatj can manage your Discord server, send Wellcome message for member join your Discord server. \nAnd Nhaatj can play music on Youtube.\n "},

            {name: 'Commands', value: "`/help` : all infomations about us \n `/play` : play music \n `/stop` : stop music \n `/leave` : leave voice channel \n "},

            {name: 'Contact', value: "You can contact me on [FaceBook](https://www.fb.com/nhaatj.isme35/). \n "},

            {name: 'Version', value: "1.0"},
        )
        .setFooter('Thanks for using Nhaatj-BOT 💙 ')
        message.channel.send(newEmbed);
    }
    
}