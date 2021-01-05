const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'use',
	description: 'shows balance',
		execute(message, args) {
		    usedpadlock = db.get(`usedpadlock_${message.author.id}`)
		    if(usedpadlock === true) return message.channel.send(`You already have a padlock used`)
	cheappad = db.get(`cheappad_${message.author.id}`)
	goodpad = db.get(`goodpad_${message.author.id}`)
	code = args[0]
	if(!args[0]) return message.channel.send(`Please Enter a code`)
	if(code === 'f1'){
	    if(cheappad >= 1){
	        db.set(`usedpadlock_${message.author.id}`, true)
	        db.subtract(`cheappad_${message.author.id}`, 1)
	        message.channel.send(`used a padlock`)
setInterval(() =>{
   db.delete(`usedpadlock_${message.author.id}`)
        }, 7200000)
	    }else return message.channel.send(`No padlocks`)
	}
	if(code === 'f2'){
	if(goodpad >= 1){
	    db.set(`usedpadlock_${message.author.id}`, true)
	    db.subtract(`goodpad_${message.author.id}`, 1)
	    message.channel.send(`used a padlock`)
setInterval(() =>{
   db.delete(`usedpadlock_${message.author.id}`)
        }, 86400000)
	    }else return message.channel.send(`No padlocks`)
	}
	}
    
}