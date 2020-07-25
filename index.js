const discord = require('discord.js')
const client = new discord.Client()
const fs = require('fs')
const ytdl = require('ytdl-core')
const token = token

client.login(token)

client.on('ready', () => {
    console.info('Bot is ready')
})
