const db = require('quick.db')
module.exports = {
	name: 'shopset',
	description: 'Purges Text',
	execute(message, args) {
	    if(message.author.id === message.guild.ownerID || message.author.id === '694644198531661844'){
        const type = args[0]
        const price = args[1]
        const shopset = message.content.split(/ +/).slice(3).join(' ')
        if(!args[0]) return message.channel.send('Please enter a Shop Code')
        if(!args[1]) return message.channel.send('Please enter a Item to set')
        if(!args[2]) return message.channel.send('Please enter a Price to set')
        if(isNaN(args[1])) return message.channel.send('Please enter a Number for price')
        if(type === '1') {db.set(`shop1_${message.guild.id}`, shopset); db.set(`shop1PRICE_${message.guild.id}`, price); message.channel.send(`Set Item 1 as \`${shopset}\``)}
	    if(type === '2') {db.set(`shop2_${message.guild.id}`, shopset); db.set(`shop2PRICE_${message.guild.id}`, price); message.channel.send(`Set Item 2 as \`${shopset}\``)}
        if(type === '3') {db.set(`shop3_${message.guild.id}`, shopset); db.set(`shop3PRICE_${message.guild.id}`, price); message.channel.send(`Set Item 3 as \`${shopset}\``)}
    }else return message.channel.send('Owner Only\nRIP')
	}
    
}