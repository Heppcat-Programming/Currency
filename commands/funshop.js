const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'funshop',
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
        .setTitle('Our Fun shop')
        .setColor('#000ff')
        .addFields(
            { name: 'Your Points', value: `\`${points}\``, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Available Cashouts', value: 'These are what you can cashout points for' },
            { name: "Padlock", value: `Code \`f1\` Price \`150\` Time it last for \`2hrs\``, inline: false},
            { name: "Padlock 2", value: `Code \`f2\` Price \`400\` Time it last for \`1 day\``, inline: false},
        )
        .setFooter('This is what you can buy with points');
        message.channel.send(shop)
    }
}