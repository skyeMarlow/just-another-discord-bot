const fetch = require('node-fetch');
var data = require('../data/races.json');

module.exports = {
	name: 'race',
	description: 'Get information about a dnd class',
	async execute(message, args) {

		const raceName = message.content.split(" ").slice(1).join(" ").toLowerCase();

		for (let i = 0; i < 55 ; i++){
			let temp = data[i].name.toLowerCase();
			//console.log(temp);
			if(raceName == temp){
			var queriedRace = data[i];
			console.log("found");
			break;
		}
	}   
	console.log(raceName);
}
};  