const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'goldenpnt',
	description: 'Buys Item',
	execute(message) {
  goldenpntcheck = db.get(`goldenpnt_${message.author.id}`)
  if(goldenpntcheck === true) return
  points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100];
  goldenpnt = points[Math.floor(Math.random() * points.length)];
  db.add(`points_${message.author.id}`, goldenpnt)
  if(goldenpnt === 100){
        db.set(`goldenpnt_${message.author.id}`, true)
        message.channel.send(`Congrats ${message.author.toString()} you just got the golden point it is worth 100 points`)
  
   setInterval(() =>{
   db.delete(`goldenpnt_${message.author.id}`)
        }, 600000)
	}
	}
    
}