module.exports = {
	name: 'avatar',
	description: 'returns avatar',
	execute(message) {
		if (!message.mentions.users.size){
			return message.channel.send(message.author.avatarURL);
		} 
		const theUser = message.mentions.users.map(user =>{
			return `${user.username}'s avatar: ${user.displayAvatarURL}`
		});

		message.channel.send(theUser);

		
	},
}; 