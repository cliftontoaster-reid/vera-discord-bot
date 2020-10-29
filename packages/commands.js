const { Message } = require("discord.js")

exports.command = function (msg) {

    if (Message.content === "&id") {
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
        msg.channel.send(embed)
    }
}