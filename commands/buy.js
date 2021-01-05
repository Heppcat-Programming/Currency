const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'buy',
	description: 'Buys Item',
	execute(message) {
        const item = message.content.split(' ').slice(1).join(' ');
        shop1 = db.get(`shop1_${message.guild.id}`)
        shop2 = db.get(`shop2_${message.guild.id}`)
        shop3 = db.get(`shop3_${message.guild.id}`)
        shop1price = db.get(`shop1PRICE_${message.guild.id}`)
        shop2price = db.get(`shop2PRICE_${message.guild.id}`)
        shop3price = db.get(`shop3PRICE_${message.guild.id}`)
        if (!item === null) return message.content.send('Please enter an item code to Buy')
        if (item === '1'){
            points = db.get(`points_${message.author.id}`)
            if (points >= shop1price){ 
            db.subtract(`points_${message.author.id}`, shop1price)
            if(message.guild.id === '720404658207719465')message.member.roles.add('741800376990433301')
            if(message.guild.id === '720404658207719465')message.member.roles.remove('741800225928118292')
            message.channel.send(`Bought ${shop1}`)
            db.set(`sellablered_${message.guild.id}_${message.author.id}`, true)
            if(message.guild.id === '720404658207719465')message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Bought ${shop1}`)})
            setInterval(() =>{
            db.delete(`sellablered_${message.guild.id}_${message.author.id}`)
        }, 120000)
        }else{
            return message.channel.send('Not Enough Points')
        }
    }
        if (item === '2'){
            points = db.get(`points_${message.author.id}`)
            if (points >= shop2price){ 
            db.subtract(`points_${message.author.id}`, shop2price)
            message.channel.send(`Bought ${shop2}`)
            if(message.guild.id === '720404658207719465')message.member.roles.add('741800225928118292')
            if(message.guild.id === '720404658207719465')message.member.roles.remove('741800376990433301')
            db.set(`sellableblue_${message.guild.id}_${message.author.id}`, true)
            if(message.guild.id === '720404658207719465')message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Bought ${shop2}`)})
            setInterval(() =>{
            db.delete(`sellableblue_${message.guild.id}_${message.author.id}`)
        }, 120000)
        }else{
            return message.channel.send('Not Enough Points')
        }
    }
        if (item === '3'){
            points = db.get(`points_${message.author.id}`)
            if (points >= shop3price){
            db.subtract(`points_${message.author.id}`, shop3price)
            message.channel.send(`Bought ${shop3}`)
            if(message.guild.id === '720404658207719465')message.member.roles.add('741800832944570409')
            db.set(`sellableall_${message.guild.id}_${message.author.id}`, true)
            if(message.guild.id === '720404658207719465')message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Bought ${shop3}`)})
            setInterval(() =>{
            db.delete(`sellableall_${message.guild.id}_${message.author.id}`)
        }, 120000)
        }else{return message.channel.send('Not Enough Points')}
    }
            if (item === '4'){
            points = db.get(`points_${message.author.id}`)
            if (points >= '500'){
            db.subtract(`points_${message.author.id}`, 500)
            licence = db.get(`licence_${message.author.id}`)
            if(licence === null){db.set(`licence_${message.author.id}`, 0)}
            db.add(`licence_${message.author.id}`, 1)
            newlicence = db.get(`licence_${message.author.id}`)
            message.channel.send(`Licence added you now have ${newlicence} licences`)
            message.author.send('The bot inv is https://discord.com/api/oauth2/authorize?client_id=734072084019544074&permissions=8&scope=bot')
            message.client.users.fetch('694644198531661844').then (user =>{user.send(`${message.author.tag} Just Bought a licence`)})
        }else{return message.channel.send('Not Enough Points')}
            }
        if (item === 'f1'){
            padlockamount = db.get(`cheappad_${message.author.id}`)
            points = db.get(`points_${message.author.id}`)
            if (points >= '150'){
            db.subtract(`points_${message.author.id}`, 150)
            if(padlockamount === null) db.set(`cheappad_${message.author.id}`, 0)
            db.add(`cheappad_${message.author.id}`, 1)
            message.channel.send(`Bought a padlock`)
            }else{return message.channel.send('Not enough points')}
        }
                    if (item === 'f2'){
            padlockamount = db.get(`goodpad_${message.author.id}`)
            points = db.get(`points_${message.author.id}`)
            if (points >= '400'){
            db.subtract(`points_${message.author.id}`, 400)
            if(padlockamount === null) db.set(`goodpad_${message.author.id}`, 0)
            db.add(`goodpad_${message.author.id}`, 1)
            message.channel.send(`Bought a padlock`)
            }else{return message.channel.send('Not enough points')}
    }
    }
}