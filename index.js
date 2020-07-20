let Discord = require('discord.js');
let client = new Discord.Client();
const fs = require('fs'); //file structure
const {token, prefix} = require('./auth.json');
client.commands = new Discord.Collection();
const keepAlive = require('./server.js');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (var file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!` + 'I am ready to go!');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`currently in ${client.guilds.size} servers`, { type: 'PLAYING' });
});

client.on('message', async message => {
	if (message.content.includes('69')){
		message.channel.send('Nice!');
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) 
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', 'your error:' + error.message);
});

client.login(token); 