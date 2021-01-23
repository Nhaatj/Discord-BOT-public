const config = require('../config/config.json')
const prefix = config.prefix
const version = config.version

module.exports = {
    name : 'help',
    description : "Help",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('2E9BFF')
            .setTitle('isme')
            .setURL('http://www.ismebot.cf/') // this is URL's Title
            .setDescription(`These are all ***isme***'infomations :blue_heart: `)
            .addFields(
                {name: 'Who am i?', value: "***isme*** is Discord_Bot. \nHe was created by Nguyen Duc Nhat.\n "},
                {name: 'What can i do?', value: "***isme*** can manage your Discord server, send Wellcome message for member join your Discord server. \nAnd ***isme*** can play music on Youtube.\n "},
                {name: 'Commands', value: `***${prefix}help*** : all infomations about us \n ***${prefix}play*** : play music \n ***${prefix}stop*** : stop music \n ***${prefix}leave*** : leave voice channel \n `},
                {name: 'Contact', value: "You can contact me on [Facebook](https://www.fb.com/nhaatj.isme35/). \n "},
                {name: 'Version', value: `${version}`},
            )
            .setFooter('Thanks for using isme')

        if ( command === 'help')
            return message.channel.send(newEmbed);
    }
    
}