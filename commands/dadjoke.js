const fetch = require('node-fetch');

module.exports = {
	name: 'dadjoke',
	description: 'Get a random cat',
	async execute(message) {
		const file  = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes')
		.then(response => response.json());

		message.channel.send(file.setup + "\n" + file.punchline);
	},
}; 
