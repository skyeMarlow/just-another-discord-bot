const fetch = require('node-fetch');
var data = require('../data/monster.json');
const Discord = require('discord.js');

module.exports = {
	name: 'monster',
	description: 'Get information about a dnd monster',
	async execute(message, args) {

		const monsterName = message.content.split(" ").slice(1).join(" ").toLowerCase();

		for (let i = 0; i < data.length ; i++){
			let temp = data[i].name.toLowerCase();
			if(monsterName == temp){
				var queriedMonster = data[i];
				console.log("found");
			break;
		}
	}   

	const embed = new Discord.RichEmbed()
	  	.setColor('#EFFF00')
	  	.setTitle(queriedMonster.name)
			.setAuthor(message.author.username, message.author.avatarURL)
			.addField("Type", queriedMonster.type)
			.addField("speed", queriedMonster.speed)
	  	.addField("Size", queriedMonster.size, true)
			.addField("AC", queriedMonster.ac, true)
			.addField("HP", queriedMonster.hp, true)
			.addField("Languages", queriedMonster.languages)
			.setFooter(`Challenge Rating: ${queriedMonster.cr}`)

			if (typeof queriedMonster.save != 'undefined'){
			embed.addField("Saves", queriedMonster.save)
			}

			for (i in queriedMonster.trait){
	  		embed.addField(`${queriedMonster.trait[i].name}`, queriedMonster.trait[i].text)
	  	} 

				for (i in queriedMonster.action){
	  		embed.addField(`${queriedMonster.action[i].name}`, queriedMonster.action[i].text)
	  	}

	message.channel.send(embed);
}
};  