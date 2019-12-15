
module.exports = {
	name: 'stats',
	description: 'where is the bot right now?',
	execute(message) {
		message.channel.send( `${users.size} users, in ${channels.size} 
		channels of ${guilds.size} guilds.`);
	},
}; 
//this does not work yet S