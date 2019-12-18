const fetch = require('node-fetch');

module.exports = {
	name: 'monster',
	description: 'Get information about a dnd class',
	async execute(message, args) {

		const monsterName = message.content.split(" ").slice(1).join("-").toLowerCase();
		console.log(monsterName);

		const  list  = await fetch('https://api.open5e.com/monsters/' + monsterName + '/?format=json')
	    .then(response => response.json());
	   

	    if(list.detail == 'Not found.'){
	    	return message.channel.send("Sorry, cannot find that monster, please check your spelling!");
	    }

	    message.channel.send (`**${list.name}: ** \n**Size:** ${list.size} \n**Type:** ${list.type} \n**SubType** ${list.subtype} \n**AC:** ${list.armor_class} \n**Hit dice:** ${list.hit_dice} \n**Speed:** ${list.speed.walk}`
	    	+ `\n**Str Save:** ${list.strength_save} \n**Dex Save:** ${list.dexterity_save} \n**Con Save:** ${list.constitution_save}`
	    	+ `\n**Int Save:** ${list.intelligence_save} \n**Wis Save:** ${list.wisdom_save} \n**Cha Save:** ${list.charisma_save}`
	    	+ `\n**Perception:** ${list.perception}` );

	},
}; 