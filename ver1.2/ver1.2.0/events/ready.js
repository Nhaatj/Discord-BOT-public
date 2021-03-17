module.exports = async (client) => {

    console.log(`Isme is ready! \n----------\n${client.guilds.cache.size} servers \n${client.users.cache.size} users`);

    client.user.setActivity(client.config.status, { type: 'LISTENING'});
};
