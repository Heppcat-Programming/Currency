const Discord = require('discord.js');
const db = require('quick.db');
var fs = require("fs");
module.exports = {
	name: 'leaderboard',
	description: 'Buys Item',
	async execute(message) {
	    alldb = db.all()
        filtered = alldb.filter(data => data.ID.startsWith('points_'))
        send = filtered.map( f => {
          x = {}
          x.id = f.ID
          x.points = db.get(f.ID)
          return x
        }).sort((a,b) => {return b.points - a.points}).map(f => f.id+" = "+f.points+" ")
        lb1 = Array.from(send)[0].split(/ +/)
        lb2 = Array.from(send)[1].split(/ +/)
        lb3 = Array.from(send)[2].split(/ +/)
        userID1 = lb1[0].slice(7)
        points1 = lb1[2]
        await message.client.users.fetch(userID1, true)
        username1 = message.client.users.cache.get(userID1).tag
        points2 = lb2[2]
        userID2 = lb2[0].slice(7)
        await message.client.users.fetch(userID2, true)
        username2 = message.client.users.cache.get(userID2).tag
        points3 = lb3[2]
        userID3 = lb3[0].slice(7)
        await message.client.users.fetch(userID3, true)
        username3 = message.client.users.cache.get(userID3).tag
        leaderboard = new Discord.MessageEmbed()
        .setTitle(`Heppcat Currency Leaderboard`)
        .setThumbnail('http://heppcat.com/wp-content/uploads/2020/08/CatHHAT.jpg')
        .addFields(
            { name: '1. ' + username1, value: `Points \`${points1}\``, inline: false},
            { name: '2. ' + username2, value: `Points \`${points2}\``, inline: false},
            { name: '3. ' + username3, value: `Points \`${points3}\``, inline: false}
        )
        .setColor('#000ff');
        message.channel.send(leaderboard)
	}
    
}