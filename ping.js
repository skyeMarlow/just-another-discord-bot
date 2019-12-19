const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {

	name: 'ping',
	description: 'ping',
	execute(message) {
		message.channel.send('Pong.' );
	},
}; 