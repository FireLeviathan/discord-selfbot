const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"], partials: ['CHANNEL',] });
const config = require("./config/auth.json");
const message_embed = require("./config/message.json");
const bot_id = require("./config/id.json")
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();


//start
client.once('ready', () => {
	console.log('Ready!');
});




//command settings
client.on('message', message => {
	
	const Embed = {
		color: 3447003,
		 title: "MESSAGE AUTO-GENERATED" ,
		 description: message_embed.message,
		 timestamp: new Date(),
		 footer: {
		  text: "source code:  https://github.com/FireLeviathan/discord-selfbot "
		}
	};


	if (message.channel.type == "dm" && message.author.id != bot_id.id) {
		message.author.send({ embed: Embed }).catch(err => console.log('DM cannot be sent'));
		console.log('User ' + message.author.username + ' received DM message');
		return;
	}
});


//DISCORD
client.login(config.token);