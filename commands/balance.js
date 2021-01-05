const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'bal',
	description: 'shows balance',
	execute(message) {
        user = message.mentions.members.first()
        User = message.mentions.users.first();
        if (!user) {balance = db.get(`points_${message.author.id}`)
        if(balance === null) balance = 0
        return message.channel.send(`${message.author.tag}'s balance \`${balance}\``)}
        balance = db.get(`points_${user.id}`)
        if(balance === null) balance = 0
        message.channel.send(`${User.tag}'s balance \`${balance}\``)
    }
}