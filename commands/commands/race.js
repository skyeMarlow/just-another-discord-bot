const fetch = require('node-fetch');
var data = require('../data/races.json');
const Discord = require('discord.js');

module.exports = {
	name: 'race',
	description: 'Get information about a dnd class',
	async execute(message, args) {

		const raceName = message.content.split(" ").slice(1).join(" ").toLowerCase();

		for (let i = 0; i < 55 ; i++){
			let temp = data[i].name.toLowerCase();
			if(raceName == temp){
				var queriedRace = data[i];
				console.log("found");
			break;
		}
	}   
	console.log(raceName);

	const embed = new Discord.RichEmbed()
	  	.setColor('#EFFF00')
	  	.setTitle(queriedRace.name)
	  	.setAuthor(message.author.username, message.author.avatarURL)
	  	.addField('Size', queriedRace.size, true)
	  	.addField('Speed', queriedRace.speed, true)
	  	.addField('ability score increase', queriedRace.ability, true)
	  	.setFooter(`From ${queriedRace.source}`);


	  	if(queriedRace.proficiency != ""){
	  		if(typeof queriedRace.proficiency != 'undefined'){
	  			embed.addField('Proficienies', queriedRace.proficiency, true)
	  		}
	  	}

	  	for (i in queriedRace.trait){
	  		embed.addField(`${queriedRace.trait[i].name}`, queriedRace.trait[i].text)
	  	}

	message.channel.send(embed);
}
};  