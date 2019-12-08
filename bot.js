const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!` + 'I am ready to go!');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.on('message', msg => {
  //ping command
    //console.log(msg);
    
  if (msg.content === '!ping') {
    msg.channel.send('Pinging...')
    .then((msg) => {
      msg.edit("Ping: " + (Date.now() - msg.createdTimeStamp));
    });
  }
  //end of ping command
  //no bots allowed
  if(msg.author.bot){
    return;
  }
  //because it caused an endless loop :(
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
  
  if (msg.content.includes('69')){
  	msg.channel.send('Nice.');
  }
  //just for fun end 

  //this is an exit command 
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