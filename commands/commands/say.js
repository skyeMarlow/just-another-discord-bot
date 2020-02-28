module.exports = {
	name: 'say',
	description: 'This is an echo bot',
	execute(message) {
		//if(!message.content.size) return message.channel.send("Please provide something for me to say");
			let array = message.content.split(" ").slice(1).join(" ");
    		message.channel.send(array);
    		message.delete();
    	},
}; 