const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'pay',
	description: 'Buys Item',
	execute(message) {
	     const reciver = message.mentions.users.first()
	    if(message.author.id === message.mentions.users.first().id) return message.channel.send('U cant pay urself')
        const amount = Number(message.content.split(' ').slice(2).toString())
        if(message.content.includes('-') && message.author.id != '694644198531661844') return message.channel.send('You cant pay negative LOOOL')
        const pointsval = db.get(`points_${message.author.id}`) 
        if(!reciver) return message.channel.send('Please mention a user')
        if (!amount === null) return message.channel.send('Please enter an amount to pay')
        if(isNaN(amount))return message.channel.send('Please enter a number to pay')
        if(pointsval >= amount || message.author.id === '694644198531661844'){
            db.subtract(`points_${message.author.id}`, amount)
            if(message.author.id === '694644198531661844'){ db.add(`points_${message.author.id}`, amount)
                            db.add(`points_${reciver.id}`, amount)
            message.channel.send('Paid')
            }else{
            db.add(`points_${reciver.id}`, amount)
            message.channel.send('Paid')
            }
        }else return message.channel.send('HAHA not enough money')
    }
}