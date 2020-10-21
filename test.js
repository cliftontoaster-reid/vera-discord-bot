if (message.content === "/ink") {
  if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('src/music/ink.mp3');
      dispatcher.setVolume(0.3)
  } else {
      message.reply('You need to join a voice channel first!');
  }
}