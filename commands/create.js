const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'create',
	description: 'Buys Item',
	execute(message) {
	    if(message.author.id === '694644198531661844' || message.author.id === '724961424601907251'){
        const amount = Number(message.content.split(' ').slice(1).toString())
        if (!amount === null) return message.content.send('Please enter an amount to create')
        if(isNaN(amount))return message.channel.send('Please enter a number')
            db.add(`points_${message.author.id}`, amount)
	    }else return message.channel.send('Big Bois only\nNOOB')
    }
}