Discord = require('discord.js');
const {
    Client,
    Attachment,
    MessageEmbed
} = require('discord.js');
const bot = new Client();

const usedCommandRecently = new Set();

const PREFIX = '$';

bot.on('ready', () => {
    console.log('This Bot is online!');
    bot.user.setActivity('Rejection with 69 others')
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'website':
            message.channel.send('https://www.youtube.com/channel/UCE-kCE7Wb8K9yi7yUXa3bSw?view_as=subscriber')
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.send('version 1.0.0');
            } else {
                message.reply('Invalid args')
            }
            break;
        case 'chutiyakon':
            message.channel.send('sarosh xD and || ali abbass ||')
            break;
        case 'clear':
            if(message.member.roles.cache.some(role => role.name === 'Owners')) 
            if (!args[1]) return message.reply('Error please definde second arg')
            message.channel.bulkDelete(args[1]);

            break;
        case 'embed':
            const embed = new Discord.MessageEmbed() 
                .setTitle('User Information')
                .addField('Player name', message.author.username)
                .addField('Version', '1.0.0')
                .addField('Current Server', message.guild.name)
                .setColor(0xD71D85)
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter('Sarosh nub')
            message.channel.send(embed);
            break;
        case 'send':
            const attachment = new Discord.MessageAttachment("https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg");
            message.channel.send(message.author, attachment);
            break;
        case 'nubkon':
            message.channel.send('Midnaa')
            break;
        case 'cooldown':

            break;
        case 'dhokebaaz':
            message.channel.send('teen')
            break;
        case 'sabki,ammi':
            message.channel.send('teen')
            break;
        case 'help':
            const Embed = new Discord.MessageEmbed()
                .setTitle('List of commands')
                .setColor(0xFF0000)
                .setDescription('Prefix : $');
                .addField('Commands')
            message.author.send(Embed);
            break;

    }


});

bot.login(process.env.token);