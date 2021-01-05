const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'sell',
	description: 'Buys Item',
	execute(message) {
        const item = message.content.split(' ').slice(1).join(' ');
        if (!item === null) return message.content.send('Please enter an item code to Sell')
        shop1 = db.get(`shop1_${message.guild.id}`)
        shop2 = db.get(`shop2_${message.guild.id}`)
        shop3 = db.get(`shop3_${message.guild.id}`)
        shop1price = db.get(`shop1PRICE_${message.guild.id}`)
        shop2price = db.get(`shop2PRICE_${message.guild.id}`)
        shop3price = db.get(`shop3PRICE_${message.guild.id}`)
        if (item === '1'){
            points = db.get(`points_${message.author.id}`)
            sellablered = db.get(`sellablered_${message.guild.id}_${message.author.id}`)
            if (sellablered === true){ 
            db.add(`points_${message.author.id}`, shop1price)
            if(message.guild.id === '720404658207719465')message.member.roles.remove('741800225928118292')
            message.channel.send(`Sold ${shop1}`)
            db.delete(`sellablered_${message.guild.id}_${message.author.id}`)
            if(message.guild.id === '720404658207719465')message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Sold red`)})
        }else{
            return message.channel.send('Not Sellable')
        }
    }
        if (item === '2'){
            points = db.get(`points_${message.author.id}`)
            sellableblue = db.get(`sellableblue_${message.guild.id}_${message.author.id}`)
            if (sellableblue === true){ 
            db.add(`points_${message.author.id}`, shop2price)
            message.channel.send(`Sold ${shop2}`)
            if(message.guild.id === '720404658207719465')message.member.roles.remove('741800376990433301')
            db.delete(`sellableblue_${message.guild.id}_${message.author.id}`)
            if(message.guild.id === '720404658207719465')message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Sold Blue`)})
        }else{
            return message.channel.send('Not Sellable')
        }
    }
        if (item === '3'){
            points = db.get(`points_${message.author.id}`)
            sellableall = db.get(`sellableall_${message.guild.id}_${message.author.id}`)
            if (sellableall === true){ 
            db.add(`points_${message.author.id}`, shop2price)
            message.channel.send(`Sold ${shop3}`)
            if(message.guild.id === '720404658207719465')message.member.roles.remove('741800832944570409')
            db.delete(`sellableall_${message.guild.id}_${message.author.id}`)
            if(message.guild.id === '720404658207719465')message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Sold all`)})
        }else{
            return message.channel.send('Not Sellable')
        }
    }
    }
}