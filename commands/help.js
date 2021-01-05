const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
	name: 'help',
	description: 'Shows Help',
	execute(message) {
        help = new Discord.MessageEmbed()
        .setTitle('Help')
        .setColor('#000ff')
        .setDescription(`1. >shop -shows shop
2. >buy 'item code' -buys item
3. >balance -shows balance
4. >bal -shows balance
5. >pay 'mention' 'amount' -pays another user coins
6. >shopset 'itemcode' 'price' 'item' -Sets shop items
7. >sell 'Item Code' -Sells the item
8. >licence -Uses licence
9. >use 'code' -Uses item
10. >rob 'mention' -Robs user
11. >funshop -shows funshop
12. >inv -Shows Inventory
13. >give 'mention' 'code' 'amount' -Give a user an item
14. >createstore 'name' -makes a store for 10 points a day`)
.setFooter('Spam does not count for points')
message.channel.send(help)
    }
}