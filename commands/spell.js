const fetch = require('node-fetch');

module.exports = {
	name: 'spell',
	description: 'Get information about a dnd class',
	async execute(message, args) {

		const spellName = message.content.split(" ").slice(1).join("-").toLowerCase();
		console.log(spellName);

		const  list  = await fetch('https://api.open5e.com/spells/' + spellName + '/?format=json')
	    .then(response => response.json());
	   

	    if(list.detail == 'Not found.'){
	    	return message.channel.send("Sorry, cannot find that spell, please check your spelling!");
	    }

	    message.channel.send('> **' + list.name + '**' + `\n**At higher levels:** ${list.higher_level} \n**Range:**  ${list.range} \n**Ritual?:** ${list.ritual} \n**Duration:** `
	    	+ list.duration + `\n**Casting Time**: ${list.casting_time} \n**Level:** ${list.level} \n**School:** ` +
	    	`${list.school} \n**Classes:** ${list.dnd_class} \n**Components:** ${list.components} \n**Materials:** ${list.material}`);
	},
}; 