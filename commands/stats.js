
module.exports = {
	name: 'stats',
	description: 'where is the bot right now?',
	execute(message, discord, client) {
		message.channel.send(`${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
	},
}; 
