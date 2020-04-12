module.exports = keepAlive;
let Discord = require('discord.js');
let client = new Discord.Client();
const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is alive!');
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
