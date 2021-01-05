const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'give',
	description: 'Buys Item',
	execute(message, args) {
	    if(message.author.id === message.mentions.users.first().id) return message.channel.send('U cant give stuff to urself')
            goodpad = db.get(`goodpad_${message.author.id}`)
            cheappad = db.get(`cheappad_${message.author.id}`)
            reciver = message.mentions.users.first()
            item = args[1]
            amount = Number(args[2])
            if(isNaN(amount)) return message.channel.send('Please enter a number to send')
            if(!reciver) return message.channel.send(`Please mention a user`)
            if(item === 'f1'){
                if(cheappad < amount) return message.channel.send(`Not enough padlocks`)
                reciverpad = db.get(`cheappad_${reciver.id}`)
                if(reciverpad === null) db.set(`cheappad_${reciver.id}`, 0)
                db.add(`cheappad_${reciver.id}`, amount)
                db.subtract(`cheappad_${message.author.id}`, amount)
                message.channel.send(`Gave ${reciver.toString()} ${amount} padlock(s)`)
            }
            if(item === 'f2'){
                if(goodpad < amount) return message.channel.send(`Not enough padlocks`)
                reciverpad = db.get(`goodpad_${reciver.id}`)
                if(goodpad === null) db.set(`goodpad_${reciver.id}`, 0)
                db.add(`goodpad_${reciver.id}`, amount)
                db.subtract(`goodpad_${message.author.id}`, amount)
                message.channel.send(`Gave ${reciver.toString()} ${amount} padlock(s)`)
            }
            
    }
}