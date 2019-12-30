const Discord = require('discord.js');

module.exports = {
	name: 'google',
	description: 'lmgtfy',
	async execute(message) {
		const query = message.content.split(" ").slice(1).join("+").toLowerCase();
		console.log(query);

		if(!query){
			message.channel.send("please provide a search term")
		} else 
		{
		const embed = new Discord.RichEmbed()
		.setColor('#EFFF00')
	  	.setTitle("Click Here")
	  	.setURL(`https://lmgtfy.com/?q=${query}`)
	  	.setDescription("I googled it");
		
		message.channel.send(embed);
		}
	}
};