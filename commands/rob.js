const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'rob',
	description: 'Buys Item',
	execute(message) {
	    robbed = db.get(`robbed_${message.author.id}`)
	    yourpnts = db.get(`points_${message.author.id}`)
	    if(yourpnts < 250) return message.channel.send(`You dont have 250 points`)
	    if(robbed === true) return message.channel.send(`You robbed someone it the last 2m pls wait`)
	    if(message.author.id === message.mentions.users.first().id) return message.channel.send('U cant rob urself')
	    if(message.mentions.users.first().bot === true) return message.channel.send('You cant rob bots')
        const reciver = message.mentions.users.first()
        const pointsval = db.get(`points_${reciver.id}`)
        if(reciver.id === '694644198531661844' || reciver.id === '743131110929727538'){message.channel.send(`Cheating lost 250 points`); return db.subtract(`points_${message.author.id}`, 250)}
        padlock = db.get(`usedpadlock_${reciver.id}`)
        if(!reciver) return message.channel.send('Please mention a user')
        if(pointsval < 500) return message.channel.send('Not worth it they dont even have 500 points')
        if(padlock === true) {message.channel.send('They had a padlock RIP you paid them 250 points'); db.delete(`usedpadlock_${reciver.id}`); db.add(`points_${reciver.id}`, 250); return db.subtract(`points_${message.author.id}`, 250)}
            points = [100, 200, 250, 0];
            amount = points[Math.floor(Math.random() * points.length)];
            db.subtract(`points_${reciver.id}`, amount)
            db.add(`points_${message.author.id}`, amount)
            if(amount === 0){db.add(`points_${reciver.id}`, 250); db.subtract(`points_${message.author.id}`, 250); return message.channel.send('You were caught you paid them 250 points')}
            message.channel.send(`You robbed ${reciver.toString()} and got ${amount} points`)
            db.set(`robbed_${message.author.id}`, true)
            setInterval(() =>{
   db.delete(`robbed_${message.author.id}`)
        }, 120000)
    }
}