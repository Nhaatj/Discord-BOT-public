const { MessageEmbed, version } = require("discord.js");
const config = require('../config/bot.json');
const color = config.color;
const prefix = config.prefix;
const ver = config.ver;



exports.run = async (client, message) => {
    const embed = new MessageEmbed()
        .setColor(color)
        .setFooter('Thank for using Isme 💙')
        .setAuthor('Isme', client.user.displayAvatarURL(), 'https://ismebot.cf/')
        .setDescription(`These are all isme' infomations :blue_heart:`)
        .addField( 'Who i am ?','- **isme** is Discord Bot.\n- He was created by [Nguyen Duc Nhat](http://nhaatj.me/).')
        .addFields(
            { name: 'Feature', value: '- Manage your Discord server.\n- Send welcome message to new member join your Discord server and set first role for them.\n- Play music on Youtube.\n- Play radio **`24/7`**.'},
            { name: 'Commands', value: `- ***${prefix}help*** : all infomations about us\n- ***${prefix}play*** : play music\n- ***${prefix}np*** : music now playing\n- ***${prefix}stop*** : stop music\n- ***${prefix}pause*** : pause music\n- ***${prefix}resume*** : resume music\n- ***${prefix}queue*** : all music in queue\n- ***${prefix}clear*** : clear queue\n- ***${prefix}skip*** : go to next music in queue\n- ***${prefix}shuffle*** : shuffle music in queue\n- ***${prefix}loop*** : loop queue\n- ***${prefix}volume*** : set volume for bot\n\n Or u can go [here](https://ismebot.cf/commands) read all commands.`},
            { name: 'Social', value: '[Facebook](https://www.facebook.com/nhaatj.isme35/)  [Github](https://github.com/Nhaatj)'},
            { name: 'Version', value: `${ver}`}
        )
    
    message.channel.send(embed);

};
