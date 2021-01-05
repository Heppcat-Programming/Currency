const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'createstore',
	description: 'shows balance',
	execute(message, args) {
	    if(db.get(`points_${message.author.id}`) < 10) return message.channel.send('Not enough points')
	    name = message.content.split(' ').slice(1).join(' ')
        message.guild.channels.create(name, {
        type: 'text',
        parent: '747922629264146604'
    }).then(chan => {
                db.subtract(`points_${message.author.id}`, 10)
        db.add(`points_724961424601907251`, 10)
    setInterval(() => {
        if(message.guild.channels.cache.some(channel => channel.name === message.content.split(' ').slice(1).join(' ').toLowerCase()) === false) return
        if(db.get(`points_${message.author.id}`) >= 10){
        db.subtract(`points_${message.author.id}`, 10)
        db.add(`points_724961424601907251`, 10)
        }else{
            chan.delete()
        }
    }, 86400000)
    })
    }
}