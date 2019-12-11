const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const fetch = require('node-fetch');
const querystring = require('querystring');

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!` + 'I am ready to go!');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity('minecraft C418', { type: 'LISTENING' });
});


client.on('message', async msg => {

  if (msg.content.includes('!say')){
    let array = msg.content.split(" ").slice(1).join(" ");
    msg.channel.send(array);
    msg.delete();
  }

   if (msg.content.includes('69')){
    msg.channel.send('Nice.');
  }

   if (msg.content.includes('cat')) {
    const file  = await fetch('https://aws.random.cat/meow').then(response => response.json());

    msg.channel.send(file)
    .then((msg) => {
       msg.edit("Here is your cat uwu!");
    });
  }



  if(msg.content.startsWith('!monster')){
    let array = msg.content.split(' ').slice(1);
    if (!array.length){
      return msg.channel.send('Please enter a monster to search for');
    }
    const query = querystring.stringify({search : array.join(' ')});
    console.log(query);


     let { list } = await fetch('https://api.open5e.com/monsters/?${query}')
    .then(response => response.json());
      console.log(list + 'hhhhhh');

 // msg.channel.send(list.count);
}


  //no bots allowed
  if(msg.author.bot){
    return;
  }

  if (!msg.content.includes(auth.prefix)){ return; }

  //console.log(msg);

  if(msg.content.startsWith('!define')){
    let array = msg.content.split(' ').slice(1);
    if (!array.length){
      return msg.channel.send('You need to supply a search term!');
    } 
    const query = querystring.stringify({ term: array.join(' ')});

    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
    .then(response => response.json());

      console.log(list);

 
    if (!list.length){
      return msg.channel.send(`No results found for **${array.join(' ')}**.`);
    }
    //msg.channel.send(list[0].definition);

    const [answer] = list;

  const embed = new Discord.RichEmbed()
  .setColor('#EFFF00')
  .setTitle(answer.word)
  .setURL(answer.permalink)
  .addField('Definition', trim(answer.definition, 1024))
  .addField('Example', trim(answer.example, 1024))
  .addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);

  msg.channel.send(embed);

  }

  //ping command
  if (msg.content === '!ping') {
    msg.channel.send('Pinging...')
    .then((msg) => {
      msg.edit("Ping: " + client.ping + 'ms');
    });
  }
  //end of ping command
  //testing commands

  if (msg.content.startsWith ('!react')){
	msg.react('😄');
  }

  if (msg.content.startsWith ('!delete')){
  	msg.delete(600);
  	msg.reply('your message was deleted');
  }

  if (msg.content === '!avatar'){
  	  msg.reply('you look dumb in this picture : \n' + ' ' + msg.author.avatarURL);
  }

  //end of testing commands
  //just for fun
  if (msg.content === '!zucc'){
  	msg.channel.send('https://i.kym-cdn.com/entries/icons/original/000/020/773/gooseonfire.jpg');
  }
  //just for fun end 

  //this is an exit command 

if (msg.content === '!restart'){
  if(msg.author.id === auth.owner_ID){
    msg.channel.send('attempting to restart!');
    client.destroy();
    client.login(auth.token);
    console.log('restarted successfully!');
    msg.channel.send('restarted successfully!');
  }
}

  if (msg.content === '!exit'){
    if (msg.author.id !== auth.owner_ID){
      msg.channel.send('you do not have permission to perform this action!');
      return;
    }
    msg.channel.send("successfully exited.").then(() => {
      process.exit(1);
    })
  }
  //exit command ended !!
});

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message + ' Sad boy hours!');
});

client.login(auth.token);

