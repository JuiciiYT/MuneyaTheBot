
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setStatus({type: "dnd"});
	client.user.setActivity("mu!help", {type: "STREAMING", url:"https://www.twitch.tv/juiciiyt"});
	client.user.setActivity("mu!help", {type: "PLAYING"});
	client.user.setActivity("mu!help", {type: "LISTENING"});
	client.user.setActivity("mu!help", {type: "PLAYING"});
	client.user.setActivity("mu!help", {type: "LISTENING"});
	client.user.setActivity("mu!help", {type: "PLAYING"});
	client.user.setActivity("mu!help", {type: "LISTENING"});
	client.user.setActivity("mu!help", {type: "PLAYING"});
	client.user.setActivity("mu!help", {type: "LISTENING"});
	client.user.setActivity("mu!help", {type: "PLAYING"});

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
process.on('typeError', error => {
	console.error('Failed Command:', error);
});

client.on('ready', () => {
	console.log(`2020 © Muneya`)
  console.log(`Logged in as ${client.user.tag}! Currently Online.`);
	console.log(`Booting up HTML Server for ${client.user.tag}...`)
	console.log(`Connecting to Discord APIs...`);
	console.log(`${client.user.tag} is Ready!`);
});

client.on('message', msg => {
  if (msg.content === 'mu!ping') {
    msg.channel.send('pong');
		console.log(`A user just chatted`);
  } else if (msg.content === `mu!stats`) {
		msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
    title: "Muneya Stats",
    description: "Here is Muneya's Stats",
    fields: [{
        name: "Creator",
        value: "<@620492146406981642>"
      },
      {
        name: "Online",
        value: "Yes"
      },
      {
        name: "Server Host",
        value: "Heroku"
      },
			{
				name: "Version",
				value: "V1.4"
			}
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "2020 © Muneya"
    }
  }
});
		console.log(`A user just chatted`);
  } else if (msg.content === `mu!help`) {
		msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    description: "Here is Muneya's Help Section",
    fields: [{
        name: "`mu!stats`",
        value: "Shows an embed of Muneya's current statistics."
      },
      {
        name: "`mu!bruh`",
        value: "Reacts with emojis that spell _bruh_."
			},
			{
				name: "`mu!lit`",
				value: "Reacts with fire emoji."
			},
			{
				name: "`mu!spotify`",
				value: "Reacts with Spotify Logo"
			},
			{
				name: "`mu!upgrade`",
				value: "Tells you about **MuneyaEnterprise**"
			},
			{
				name: "`mu!simp`",
				value: "Reacts with Simp Alert"
			},
			{
				name: "`mu!ghost`",
				value: "Reacts with a ghost."
      },
      {
				name: "`mu!me`",
				value: "Tells you about yourself"
			},
		  {
				name: "`mu!hello`",
				value: "Starts a DirectMessage coversation w/ Muneya."
			},
			{
				name: "`mu!github`",
				value: "Takes you to our github page."
			},
			{
				name: "`mu!donate`",
				value: "Takes you to our donate bot page."
			},
			{
        name: "`mu!vote`",
        value: "Takes you to our bot Voting Page"
      },
			{
        name: "`mu!history`",
        value: "Tells you about our History"
      },
      {
        name: "`mu!bugs`",
        value: "Bug Catching Form"
      },
      {
        name: "`mu!lofi`",
        value: "Plays lofi in the VC that you are in"
      },
      {
        name: "`mu!kawaii`",
        value: "Plays Kawaii Music in the VC you are in"
      },
      {
        name: "`mu!thot`",
        value: "Plays Number One Pillar in the VC that you are in"
      },
      {
				name: "Email",
				value: "juiciiofficial@outlook.com"
			},
			{
				name: "Support Server",
				value: "https://discord.gg/bBj5R5s"
			}
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
			text: "Email: juiciiofficial@outlook.com",
			text: "Support Server: https://discord.gg/bBj5R5s",
      text: "2020 © Muneya"
    }
  }
});
		console.log(`A user just chatted`);
  } else if (msg.content === `mu!bruh`) {
			msg.react('🅱️');
			msg.react('🇷');
			msg.react('🇺');
      msg.react('🇭');
			console.log(`A user just chatted`);
  } else if (msg.content === `mu!vote`) {
    msg.channel.send(`Vote Here: https://top.gg/bots/682581349525487703/vote`)//Change this to your own preferences
		console.log(`${msg.author.name} tried to vote.`);
  } else if (msg.content === `mu!ghost`) {
		msg.react ('704622194474483732');
	} else if (msg.content === `mu!spotify`) {
		msg.react ('704664217919422544');
	} else if (msg.content === `mu!lit`) {
		msg.react('🔥');
	} else if (msg.content === `mu!me`) {
		msg.channel.send({embed: {
    color: 3066993,
    author: {
      name: client.user.tag,
      icon_url: client.user.avatarURL
    },
    title: "About You",
    description: "Here is Info about you.",
    fields: [{
        name: "Username",
        value: `${msg.author.username}`
      },
      {
        name: "User ID",
        value: `${msg.author.id}`
			},
			{
				name: "Server Name",
				value: `${msg.guild.name}`
			},
			{
				name: "Server ID",
				value: `${msg.guild.id}`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "2020 © Muneya"
    }
  }
});
	console.error(`Someone tried to DM`)
} else if (msg.content === `mu!upgrade`) {
	msg.channel.send({embed: {
    color: 3066993,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Get MuneyaEnterprise",
    description: "A better, faster Muneya. (recommended w/ Muneya)",
    fields: [{
        name: "Why should you get MuneyaEnterprise?",
        value: "Well it adds more commands. More reactions. More Fun."
      },
      {
        name: "Do I have to kick Muneya?",
        value: "No, you don't you keep Muneya and add MuneyaEnterprise."
      },
      {
        name: "What's the price?",
        value: "Prices start at **_$2.00 monthly_** if your not a server which was gifted with MuneyaEnterprise. "
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "2020 © Muneya"
    }
  }
});
} else if (msg.content === `mu!kick`) {
	const taggedUser = msg.mentions.users.first();
	msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
	if (msg.mentions.users.size) {
		return message.reply('you need to tag a user in order to kick them!');
	}
} else if (msg.content === `mu!hello`) {
	msg.channel.type === (`"dm"`) + msg.author.send(`Hello, ${msg.author.username}`) + msg.author.send(`You contacted me via ${msg.guild.name}!`) + msg.author.send(`You can use commands in dm too.`)
	console.error(`Someone tried to DM in DM`)
} else if (msg.content === `mu!donate`) {
	msg.channel.type === (`"dm"`) + msg.author.send(`${msg.author.username}, You can Donate Here: https://donatebot.io/checkout/703643950166048798`)
} else if (msg.content === `mu!restart`) {
	if (msg.author.id !== '620492146406981642') return;
  msg.author.send('Restarted.').then(() => {
  process.exit(1);
})
} else if (msg.content === `mu!simp`) {
	msg.react(`706126794939695154`)
} else if (msg.content === `mu!github`) {
	msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Muneya's Github Repo",
    url: "http://github.com/JuiciiYT/MuneyaBot",
    description: "This is Muneya's Github Repo",
    fields: [{
        name: "`index.html`",
        value: "The file for O2Auth (still in development). [Click Here](https://github.com/JuiciiYT/MuneyaBot/blob/master/index.html)"
      },
      {
        name: "`index.js`",
        value: "The file for all commands. [Click Here](https://github.com/JuiciiYT/MuneyaBot/blob/master/index.js)"
      },
      {
        name: "`packadge.json`",
        value: "Stuff that you probably wont care about. [Click Here](https://github.com/JuiciiYT/MuneyaBot/blob/master/package.json)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "2020 © Muneya"
    }
  }
});
} else if (msg.content === `mu!donate`) {
	msg.author.send(`${msg.author.username}, You can donate to Muneya here: https://donatebot.io/checkout/703643950166048798`)
} else if (msg.content === `mu!history`) {
  msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "The History of Muneya",
    url: "",
    description: "This is the history of Muneya.",
    fields: [{
        name: "Created",
        value: "This project was supposed to start in 2019 but was later delayed til 2020."
      },
      {
        name: "Why Muneya Created",
        value: "Muneya was originally created to be a _Private_ Bot, but I decided that I thought since it has so much feaure then I added Muneya to [A Bot Hosting Company](https://top.gg)."
      },
      {
        name: "Inspiration",
        value: "My inspiration was actually [MEE6](https://mee6.xyz)."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "2020 © Muneya"
    }
  }
});
} else if (msg.content === `mu!`) {
  msg.channel.send(`<@${msg.author.id}> you need to type in a command silly.`)
  .then(msg.channel.send(`_try mu!help_`))
} else if (msg.content === `mu!bugs`) {
  msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Muneya Bugs",
    url: "https://27ayomidei.typeform.com/to/k6oZuj",
    description: "Unfortunately Muneya has bugs, so we need your help to fix and improve Muneya",
    fields: [{
        name: "How to",
        value: "Just Fill in the form above"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "2020 © Muneya"
    }
  }
});
} else if (msg.content === `mu!meme`) {
  msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: "https://i.ibb.co/PYJbkFG/face.png"
    },
    title: "This command is still in progress",
    url: "",
    description: "Sorry, about that.",
    }
  });
  } else if (msg.content === `mu!sike`) {
    msg.react('713695687530905680')
  }
});

client.on('message', async message => {
	if (message.content === `mu!music lofi`) {
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play('Lofi.mp3');
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: "https://i.ibb.co/PYJbkFG/face.png"
      },
      title: "Now Playing: Lofi Music",
      url: "",
      description: "MuneyaMusic",
      }
    });
	} else if (message.content === `mu!music kawaii`) {
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(`Kawaii.mp3`);
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: "https://i.ibb.co/PYJbkFG/face.png"
      },
      title: "Now Playing: KawaiiMusic",
      url: "",
      description: "MuneyaMusic",
      }
    });
  } else if (message.content === `mu!music thot`) {
    const connection = await message.member.voice.channel.join();
    const dispatcher = [
      connection.play("thot.mp3"),
    ]
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: "https://i.ibb.co/PYJbkFG/face.png"
      },
      title: "Now Playing: Number One Pillar",
      url: "",
      description: "MuneyaMusic",
      }
    });
  } else if (message.content === ``) {

  }
  });





client.login('NjgyNTgxMzQ5NTI1NDg3NzAz.XrGduA.0qN3XMF_A557DV7yUXPhKjkv7VY');
