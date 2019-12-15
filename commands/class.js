const fetch = require('node-fetch');

module.exports = {
	name: 'class',
	description: 'Get information about a dnd class',
	async execute(message, args) {

		const className = args.shift().toLowerCase();

		const  list  = await fetch('https://api.open5e.com/classes/' + className + '/?format=json')
	    .then(response => response.json());
	   

	    if(list.detail == 'Not found.'){
	    	return message.channel.send("Sorry, cannot find that class, please check your spelling!");
	    }

	    message.channel.send('> **' + list.name + '**' + '\n**Hit dice:** ' + list.hit_dice + '\n**HP at higher levels**: ' + 
	    	list.hp_at_higher_levels + '**\nProficiencies:** \nSkills: '+ list.prof_skills +
	    	'\nArmour: ' + list.prof_armor + '\nWeapons: ' + list.prof_weapons + '\ntools: ' + list.prof_tools
	    	+'\n**Equipment:** ' + list.equipment
	    	+ '\n**Spellcasting Ability:** ' + list.spellcasting_ability);

	},
}; 