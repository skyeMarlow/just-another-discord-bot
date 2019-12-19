const fetch = require('node-fetch');
const querystring = require('querystring');
const Discord = require('discord.js');

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
	name: 'define',
	description: 'defines a word using the urbandictionary API',

	async execute(message) {
		let array = message.content.split(' ').slice(1);
	    if (!array.length){
	      return message.channel.send('You need to supply a search term!');
	    } 
	    const query = querystring.stringify({ term: array.join(' ')});

	    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
	    .then(response => response.json());
	 
	    if (!list.length){
	      return message.channel.send(`No results found for **${array.join(' ')}**.`);
	    }

	    const [answer] = list;

	  	const embed = new Discord.RichEmbed()
	  	.setColor('#EFFF00')
	  	.setTitle(answer.word)
	  	.setURL(answer.permalink)
	  	.addField('Definition', trim(answer.definition, 1024))
	  	.addField('Example', trim(answer.example, 1024))
	  	.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

  	message.channel.send(embed);
	},
}; 