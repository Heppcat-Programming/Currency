const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'licence',
	description: 'Buys Item',
	execute(message) {
	    licence = db.get(`licence_${message.author.id}`)
	    if(licence === null) return message.channel.send('You do not have a licence to apply')
	    if(licence <= 0) return message.channel.send('You do not have a licence to apply')
	    db.subtract(`licence_${message.author.id}`, 1)
	    db.set(`whitelist_${message.guild.id}`, message.guild.id)
	    newlicences = db.get(`licence_${message.author.id}`)
	    message.channel.send(`Used 1 licence you now have ${newlicences} licences`)
    }
}