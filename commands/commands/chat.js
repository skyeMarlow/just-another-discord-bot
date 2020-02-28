
module.exports = {
	name: 'chat',
	description: 'where is the bot right now?',
	async execute(message, discord, client) {
		var alphaNumeric = /^[a-z\d\-_\s]+$/i;
		const filter = m => alphaNumeric.test(m);
		const collector = message.channel.createMessageCollector(filter ,{ time: 15000 });

		collector.on('collect', m => {
			console.log(`Collected ${m.content}`);
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		message.channel.send(`you sent ${collected.size} messages, calm down, bucko.`)
		});
	}
};