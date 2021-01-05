const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'flush',
	description: 'Buys Item',
	execute(message) {
	    if(message.author.id === '694644198531661844'){
	    const reciver = message.mentions.users.first()
	    db.delete(`points_${reciver.id}`)
	    message.channel.send(`Flushed ${reciver}'s balance`)
	    }else return message.channel.send('Big Bois only\nNOOB')
    }
}