const fs = require('fs');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const datA = {}
const db = require('quick.db');
const Discord = require('discord.js');
const path = require('path')
const { prefix, token, log, message2 } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, './commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('HC');
    client.user.setActivity('The Numbers', { type: 'WATCHING'}).catch(console.error);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot && message.author.id != '731303466072408145') return;
  if(message.channel.type === `dm`) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
     if (command === 'licence') {
        client.commands.get('licence').execute(message, args);
        }
        if (command === 'unwhitelist') {
            if(message.author.id != '694644198531661844') return
        db.delete(`whitelist_${message.guild.id}`)
        }
         whitelist = db.get(`whitelist_${message.guild.id}`)
  if(message.guild.id != whitelist) return
  if (command === 'pay') {
        client.commands.get('pay').execute(message, args);
        }
        if(message.author.bot) return
      if (command === 'shop') {
		    client.commands.get('shop').execute(message, args);
        }
      if (command === 'buy') {
        client.commands.get('buy').execute(message, args);
      }
      if (command === 'createstore') {
          if(message.guild.id != '720404658207719465') return
        client.commands.get('createstore').execute(message, args);
      }
      if (command === 'balance') {
        client.commands.get('bal').execute(message, args);
        }
      if (command === 'bal') {
        client.commands.get('bal').execute(message, args);
        }
      if (command === 'help') {
        client.commands.get('help').execute(message, args);
        }
        if (command === 'create') {
        client.commands.get('create').execute(message, args);
        }
        if (command === 'sell') {
        client.commands.get('sell').execute(message, args);
        }
        if (command === 'flush') {
        client.commands.get('flush').execute(message, args);
        }
        if (command === 'shopset') {
        client.commands.get('shopset').execute(message, args);
        }
        if (command === 'funshop') {
        client.commands.get('funshop').execute(message, args);
        }
        if (command === 'inv') {
        client.commands.get('inv').execute(message, args);
        }
        if (command === 'rob') {
        client.commands.get('rob').execute(message, args);
        }
        if (command === 'use') {
        client.commands.get('use').execute(message, args);
        }
        if (command === 'leaderboard' || command === 'lb') {
        client.commands.get('leaderboard').execute(message, args);
        }
    });
client.on('message', message => {
    if(message.channel.type === `dm`){
		if(message.author.bot) return;
		let embed = new Discord.MessageEmbed()
		.setAuthor(`From: ${message.author.username}`)
		.setColor('#000ff')
		.setDescription(message.content)
		.setFooter(`Author ID: ${message.author.id}`);
		client.channels.cache.get('744332384870334480').send(embed);
    }
});
client.on('message', message => {
    if(message.channel.type === `dm`) return
    if(message.author.bot) return
  whitelist = db.get(`whitelist_${message.guild.id}`)
  if(message.guild.id != whitelist) return
    now = (new Date()).getTime()
  if(message.channel.type === `dm`) return
  currentpoints = db.get(`points_${message.author.id}`)
  lastvalidmess = db.get(`lastvalidmess_${message.guild.id}_${message.author.id}`)
  if(now - lastvalidmess < 5000) return
  var pv1 = 0;
  var pv2 = 0;
  var pv3 = 0;
  var pv10 = 1;
  points = [pv1, pv2, pv3, pv10];
  addpoint = points[Math.floor(Math.random() * points.length)];
  if (currentpoints === null) db.set(`points_${message.author.id}`, 0)
  db.add(`points_${message.author.id}`, addpoint)
  client.commands.get('goldenpnt').execute(message);
  pointsvalue = db.get(`points_${message.author.id}`)
  db.set(`lastvalidmess_${message.guild.id}_${message.author.id}`, now)
});

client.login(token);