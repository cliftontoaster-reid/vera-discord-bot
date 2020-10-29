function c(log) {
    console.log(log)
}


c('Chargement de DISCORD.JS')
const Discord = require('discord.js');
c('OK')
c("Creation d'un client")
const client = new Discord.Client();
c('OK')
c('Chargement de la configuration')
const config = require('./src/config.json')
c('OK')
c("Chargement de YTDL-CORE")
const ytdl = require('ytdl-core')
c('OK')
const more_modules = require('./packages/commands')
c('')



client.login(config.token);


client.on('ready', () => {
    c('Bot opperationnel')
})


client.on('message', async message => {
    
    if (message.author.id === "736596631641784342") return;

    const args = message.content.split(' ')

    if (message.content === "?hello") message.reply('bien le bonjour.')
    
    if (message.content === "?ink") {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("src/music/ink.mp3");
            c("Playing: 'src/ink.mp3' with volume 0.2")
            
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }

    if (message.content.startsWith('?play')) {
        if (message.author.id === "736596631641784342") {

        } else {
            if (message.member.voice.channel) {
               const url = args[1]
                if (url.startsWith('https://')) {
                    const connection = await message.member.voice.channel.join();
                    const dispatcher = connection.play(ytdl(args[1]));
                    dispatcher.setVolume(0.5)
                    c(' ')
                    c('Playing: "ytdl(' + args[1] + ')" with volume :' + config.volume)
                    c(' ')
            } else {
                message.reply('This is not an URL.')
            }
        } else {
            message.reply('You need to join a voice channel first!');
        }
        }
    }
    
    if (message.content === "?stop") {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play("src/music/bip.mp3");
            c('Playing: "src/bip.mp3"')
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }

    if (message.content === "?help") {
        message.channel.send("Help Page")
        message.channel.send("?ink, Test the music system")
        message.channel.send("?play [URL], Play Youtube vidoes")
        message.channel.send("?stop, Stop all bot's sound.")
        c('Help Page send')
    }

    if (message.content === "&id") {
        message.delete
        message.channel.send(message.author.username)
        message.channel.send("id: " + message.author.id)
        message.channel.send('id du derniers dernier message:')
        message.channel.send(message.author.lastMessageID)
    }

})




