const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'inv',
	description: 'Buys Item',
	execute(message) {
	    user = message.mentions.users.first() || message.author
	    cheappad = db.get(`cheappad_${user.id}`)
	    goodpad = db.get(`goodpad_${user.id}`)
	    if(goodpad === null) goodpad = 0
	    if(cheappad === null) cheappad = 0
	    inv = new Discord.MessageEmbed()
        .setThumbnail('http://heppcat.com/wp-content/uploads/2020/06/CatH.png')
        .setTitle(`${user.tag}'s Inventory`)
        .setColor('#000ff')
        .addFields(
            { name: "Padlock", value: `Amount \`${cheappad}\``, inline: false},
            { name: "Padlock 2", value: `Amount \`${goodpad}\``, inline: false}
        );
        message.channel.send(inv)
	}
    
}