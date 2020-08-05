console.clear()
console.log('chargemend de la librairie disord.js')
const { Client, MessageAttachment } = require('discord.js');
console.log('OK')
console.log('création du client discord')
const client = new Client()
console.log('OK')
console.log('chargemend de la librairie disord.js')
const fs = require('fs')
console.log('OK')
console.log('chargemend de la librairie ytdl-core')
const ytdl = require('ytdl-core')
console.log('OK')
console.log('chargemend de la librairie valid-url')
const validUrl = require('valid-url')
console.log('OK')
console.log('enregistrement du token pour discord.js')
const config_file = fs.readFileSync('config.json')
const config = JSON.parse(config_file)
const token = config.discord_key
console.log('OK')
console.log("connection a l'API discord")
client.login(token)
console.log('OK')

client.on('ready', () => {
    
    console.info('Bot is ready')
})


client.on('message', message => {
    if (message.content.startsWith('!kick')) {
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
                /**
                 * Kick the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 */
                member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                        // We let the message author know we were able to kick the person
                        message.reply(`Successfully kicked ${user.tag}`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to kick the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to kick the member');
                        // Log the error
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                message.reply("That user isn't in this guild!");
            }
            // Otherwise, if no user was mentioned
        } else {
            message.reply("You didn't mention the user to kick!");
        }
    }
    if (message.content.startsWith('!ban')) {
        // Assuming we mention someone in the message, this will return the user
        // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
        const user = message.mentions.users.first();
        // If we have a user mentioned
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
            // If the member is in the guild
            if (member) {
                /**
                 * Ban the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 * Read more about what ban options there are over at
                 * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
                 */
                member
                    .ban({
                        reason: 'They were bad!',
                    })
                    .then(() => {
                        // We let the message author know we were able to ban the person
                        message.reply(`Successfully banned ${user.tag}`);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to ban the member,
                        // either due to missing permissions or role hierarchy
                        message.reply('I was unable to ban the member');
                        // Log the error
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                message.reply("That user isn't in this guild!");
            }
        } else {
            // Otherwise, if no user was mentioned
            message.reply("You didn't mention the user to ban!");
        }
    }
    if (message.content === 'ping') {
        // Send "pong" to the same channel
        message.channel.send('pong');
    }
    if (message.content === '!avatar') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }
    if (message.content === '!rip') {
        message.delete()
        // Create the attachment using MessageAttachment
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }

})
