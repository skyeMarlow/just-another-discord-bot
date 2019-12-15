const fetch = require('node-fetch');

module.exports = {
	name: 'race',
	description: 'Get information about a dnd class',
	async execute(message, args) {

		const raceName = args.shift().toLowerCase();

		const  list  = await fetch('https://api.open5e.com/races/' + raceName + '/?format=json')
	    .then(response => response.json());
	   

	    if(list.detail == 'Not found.'){
	    	return message.channel.send("Sorry, cannot find that race, please check your spelling!");
	    }

	    message.channel.send('> **' + list.name + '**' + '\n' + list.asi_desc +
	    '\n' + list.age + '\n' + list.speed_desc + '\n' + list.languages + '\n' + list.vision);
	},
}; 