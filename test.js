const discord = require('discord.js')
const client = new discord.Client()
const config = require('./src/config.json')
client.login(config.token)

client.on('message', message => {
    const embed = new discord.MessageEmbed()
    embed.setColor('#A9DEF9')
        embed.setTitle(message.author.username)
        embed.setImage(message.author.avatarURL)
        embed.addFields(
            {
                name: "id",
                value: message.author.id,
                inline: true
            },
            {
                name: "last message",
                value: message.author.lastMessage,
                inline: true
            }
        )
        .setAuthor('The French')
    message.channel.send(embed)

})

