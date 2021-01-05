const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'shop',
	description: 'Sends Shop',
	execute(message) {
	    licence = db.get(`licence_${message.author.id}`)
	    if(licence === null) licence = 0
        points = db.get(`points_${message.author.id}`)
        if (points === null) points = 0
        shop1 = db.get(`shop1_${message.guild.id}`)
        shop2 = db.get(`shop2_${message.guild.id}`)
        shop3 = db.get(`shop3_${message.guild.id}`)
        shop1price = db.get(`shop1PRICE_${message.guild.id}`)
        shop2price = db.get(`shop2PRICE_${message.guild.id}`)
        shop3price = db.get(`shop3PRICE_${message.guild.id}`)
        shop = new Discord.MessageEmbed()
        .setThumbnail('http://heppcat.com/wp-content/uploads/2020/08/CatHHAT.jpg')
        .setTitle('Our Shop Page 1')
        .setColor('#000ff')
        .addFields(
            { name: 'Your Points', value: `\`${points}\``, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Available Cashouts', value: 'These are what you can cashout points for' },
            { name: shop1, value: `Code \`1\` Price \`${shop1price}\``, inline: false},
            { name: shop2, value: `Code \`2\` Price \`${shop2price}\``, inline: false},
            { name: shop3, value: `Code \`3\`Price \`${shop3price}\``, inline: false},
            { name: 'Bot Licence', value: `Code \`4\`Price \`500\` you have \`${licence}\` licences`, inline: false},
        )
        .setFooter('This is what you can buy with points');
        message.channel.send(shop)
    }
}